import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const token = searchParams.get('token')

    if (!token) {
        redirect('/admin/register?token=false') // no existe el token
    }

    // verificar si el token existe en la base de datos
    const verifyToken = await db.verificationToken.findFirst({
        where: {
            token
        }
    })

    if (!verifyToken) {
        redirect('/admin/register?token=false') // no existe el token
    }

    if (verifyToken.expires < new Date()) {
        redirect('/admin/login?expired=true') // el token ha expirado
    }

    // verifico si el email ya se encuentra verificado
    const user = await db.user.findUnique({
        where: {
            email: verifyToken.identifier
        }
    })

    if (user?.emailVerified) {
        redirect('/admin/login?verificated=true') // email verificado
    }

    // marcar email como verificado
    await db.user.update({
        where: {
            email: verifyToken.identifier
        },
        data: {
            emailVerified: new Date(),
        }
    })

    // elimino el token
    await db.verificationToken.delete({
        where: {
            identifier: verifyToken.identifier
        }
    })

    redirect('/admin/login?token=true') // Verificación realizada
}