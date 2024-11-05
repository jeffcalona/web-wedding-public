import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "@/lib/zod"
import { db } from "./lib/db"
import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'
import { sendVerifyEmail } from "./lib/verifyEmail"
// import { sendVerifyEmail } from "./lib/verifyEmail"

// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        Credentials({
            authorize: async (credentials) => {

                const { success, data } = loginSchema.safeParse(credentials)

                if (!success) {
                    throw new Error('Credenciales inválidas')
                }

                // verificar si el usuario existe en la base de datos
                const user = await db.user.findUnique({
                    where: {
                        email: data.email,
                    }
                })

                if (!user || !user.password) {
                    throw new Error('El usuario es incorrecto')
                }

                // verificar si la contraseña es correcta
                const isValid = await bcrypt.compare(data.password, user.password)

                if (!isValid) {
                    throw new Error('El usuario es incorrecto')
                }

                // verificar si el email está verificado
                if (!user.emailVerified) {
                    // verifico si existe un token válido
                    const existingToken = await db.verificationToken.findFirst({
                        where: {
                            identifier: user.email
                        }
                    })
                    // verifico si el token existe y que no ha expirado
                    if (existingToken && existingToken.expires > new Date()) {
                        throw new Error('Por favor verifica tu email (Revisa tu bandeja de entrada)')
                    } else {
                        // si el token ya existe lo elimino
                        if (existingToken) {
                            await db.verificationToken.delete({
                                where: {
                                    identifier: user.email
                                }
                            })
                        }
                        // creo un nuevo token
                        const newToken = nanoid()
                        await db.verificationToken.create({
                            data: {
                                identifier: user.email,
                                token: newToken,
                                expires: new Date(Date.now() + 1000 * 60 * 60 * 24) //Expira en 24h
                            }
                        })
                        // envío el nuevo correo de verificación
                        await sendVerifyEmail(user.email, newToken)

                        throw new Error('Por favor verifica tu email (Revisa tu bandeja de entrada)')
                    }
                }
                return user
            }
        }),
    ],
} satisfies NextAuthConfig