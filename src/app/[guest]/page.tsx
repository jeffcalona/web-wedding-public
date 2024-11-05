import { getGuestAction } from "@/actions/getGuestAction"
import DatePage from "@/components/sections/DateSection"
import DetailsSection from "@/components/sections/DetailsSection"
import DressSection from "@/components/sections/DressSection"
import EndSection from "@/components/sections/EndSection"
import GuestPage from "@/components/sections/GuestSection"
import Home from "@/components/sections/Home"
import InfoDressSection from "@/components/sections/InfoDressSection"
import PlaceSection from "@/components/sections/PlaceSection"
import SchedulesSection from "@/components/sections/SchedulesSection"
import { redirect } from "next/navigation"

interface GuestParams {
    params: { guest: string };
}

const Guest = async ({ params }: GuestParams) => {

    const { guest } = params


    const guestResponse = await getGuestAction(guest)

    if (!guestResponse || 'error' in guestResponse) {
        redirect('/')
    }

    return (
        <main className="h-screen overflow-auto snap-y snap-mandatory hiddenScrollBar">
            <Home />
            <GuestPage guest={guestResponse.name} />
            <DatePage />
            <SchedulesSection />
            <PlaceSection />
            <DetailsSection />
            <InfoDressSection />
            <DressSection />
            <EndSection />
        </main>
    )
}

export default Guest