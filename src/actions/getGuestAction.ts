import { db } from "@/lib/db";

export async function getGuestAction(valueGuest: string) {
    try {
        const guest = await db.guest.findFirst({
            where: {
                url: `${process.env.BASE_URL}/${valueGuest}`
            }
        })

        //no existe el guest
        if (!guest) {
            return { error: 'No existe el invitado' }
        }

        return guest

    } catch (error) {
        console.log(error)
    }
}