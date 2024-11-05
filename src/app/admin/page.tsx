import { auth } from "@/auth"
import FormGuest from "@/components/FormGuest"
import GuestList from "@/components/GuestList"
import { Separator } from "@/components/ui/separator"
import { redirect } from "next/navigation"

const AdminPage = async () => {

    const session = await auth()

    if (!session) {
        redirect('/admin/login')
    }

    return (
        <section className="flex flex-col items-center h-full">
            <div className="w-[300px] my-8 space-y-8 m-auto flex flex-col items-center">
                <h3 className="fontStyles text-center text-lg leading-5 w-[90%]">Agrega cada uno de los invitados</h3>
                <div className="w-[90%]">
                    <FormGuest />
                </div>
            </div>
            <Separator className="bg-black w-[380px] mt-2" />
            <GuestList />
        </section>
    )
}

export default AdminPage