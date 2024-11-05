import CarouselGuest from "../CarouselGuest"
import ArrowDownIcon from "../ui/ArrowDownIcon"
// import DownButton from "../DownButton"
import { Separator } from "../ui/separator"

interface GuestSectionProps {
    guest: string
}

const GuestSection: React.FC<GuestSectionProps> = ({ guest }) => {
    const newGuest = guest.toLowerCase()
    return (
        <section id="invitado" className="snap-start h-screen w-full fontStyles grid grid-rows-3 text-center relative">
            <div className="w-[360px] m-auto">
                <p className="leading-[17px]">Contar con tu presencia será un capítulo invaluable en nuestra historia de amor.  Te esperamos.</p>
            </div>
            <div className="w-[360px] h-full m-auto grid grid-rows-3">
                <div className="row-span-2">
                    <h3 className="theNautigalFont leading-[55px]">{newGuest}</h3>
                    <Separator className="mt-3 w-[120px] mx-auto bg-black" />
                </div>
                <p className="text-[12px]">invitación especial</p>
            </div>
            <CarouselGuest />
            {/* <DownButton to="#fecha" /> */}
            <div className="w-full flex justify-center absolute bottom-0 z-30">
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-30" />
            </div>
        </section>
    )
}

export default GuestSection