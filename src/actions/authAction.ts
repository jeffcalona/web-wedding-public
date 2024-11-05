'use server'

import { signIn } from "@/auth";
import { db } from "@/lib/db";
import { loginSchema, registerSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from 'bcryptjs'
import { nanoid } from "nanoid";
import { sendVerifyEmail } from "@/lib/verifyEmail";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
    try {
        const { data, success } = loginSchema.safeParse(values)

        if (!success) {
            return { error: 'Credenciales inválidas' }
        }

        const user = await db.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (!user || !user.password) {
            return { error: 'El usuario es incorrecto' }
        }

        // Verifico si la contraseña es correcta
        const isValid = await bcrypt.compare(data.password, user.password)
        if (!isValid) {
            return { error: 'El usuario es incorrecto' }
        }

        // verifico si el correo está verificado
        if (!user.emailVerified) {
            const existingToken = await db.verificationToken.findFirst({
                where: {
                    identifier: user.email
                }
            })

            if (existingToken && existingToken.expires > new Date()) {
                // token aún válido
                return { error: 'Por favor verifica tu email (Revisa tu bandeja de entrada)' }
            } else {
                // token caducado o inexistente, genero uno nuevo
                const newToken = nanoid()
                if (existingToken) {
                    await db.verificationToken.delete({
                        where: {
                            identifier: user.email
                        }
                    })
                }
                // guardo el nuevo token
                await db.verificationToken.create({
                    data: {
                        identifier: user.email,
                        token: newToken,
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24) // expira en 20h
                    }
                })
                // envio el correo de verificación
                await sendVerifyEmail(user.email, newToken)

                return { error: 'Por favor verifica tu email (Revisa tu bandeja de entrada)' }
            }
        }

        await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false
        })

        return { success: true }

    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message }
        }
        return { error: 'error 500' }
    }
}

export const registerAction = async (values: z.infer<typeof registerSchema>) => {
    try {

        const { data, success } = registerSchema.safeParse(values)

        if (!success) {
            return {
                error: 'Datos inválidos'
            }
        }

        // verificar si el usuario existe
        const existingUser = await db.user.findUnique({
            where: {
                email: data.email
            },
            include: {
                accounts: true //Incluir las cuentas asociadas
            }
        })

        if (existingUser) {
            // verifico si tiene cuentas OAuth vinvuladas
            const oauthAcconts = existingUser.accounts.filter(
                (account) => account.type === 'OAuth'
            )
            if (oauthAcconts.length > 0) {
                return {
                    error: 'Para confirmar su identidad, inicie sesión con la misma cuenta que utilizó originalmente.'
                }
            }
            return {
                error: 'El usuario ya existe'
            }
        }

        // hash de la contraseña para luego crear el usuario
        const passwordHash = await bcrypt.hash(data.password, 10)

        // creo el usuario
        const newUser = await db.user.create({
            data: {
                email: data.email,
                password: passwordHash
            }
        })

        // genero token de verificación
        const token = nanoid()
        await db.verificationToken.create({
            data: {
                identifier: newUser.email,
                token,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24) // expira en 24h
            }
        })

        await sendVerifyEmail(newUser.email, token)

        return { success: true }

    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message }
        }
        return { error: 'error 500' }
    }
}