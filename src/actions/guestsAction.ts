'use server'

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const getGuests = async () => {
    const guestData = await db.guest.findMany({
        orderBy: {
            updatedAt: 'desc'
        }
    })

    return guestData

}

export const deletGuest = async (thisId: string) => {
    await db.guest.delete({
        where: {
            id: thisId
        }
    })

    revalidatePath('/admin')
    return { success: true }
}