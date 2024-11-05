import VerifyEmail from '@/emails/VerifyEmail'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { email, token } = await req.json()
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Subject from email',
            react: VerifyEmail({ token })
        })
        return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 })
    } catch (error) {
        console.log('Error al enviar el email: ', error)

        return NextResponse.json({ message: 'Error al enviar el correo' }, {
            status: 500
        })
    }
}