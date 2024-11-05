'use server'

import { db } from '@/lib/db'
import { guestSchema } from '@/lib/zod'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export const guestAction = async (values: z.infer<typeof guestSchema>) => {
    const { data, success } = guestSchema.safeParse(values)
    try {
        if (!success) {
            return { error: 'Datos incorrectos' }
        }

        // creo el invitado
        const formattedGuestName = data.guestName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

        const guestUrl = `${process.env.BASE_URL}/${formattedGuestName}`

        await db.guest.create({
            data: {
                name: data.guestName,
                url: guestUrl
            }
        })

        revalidatePath('/admin')
        return { success: true }

    } catch (error) {
        console.log(error)
    }
}