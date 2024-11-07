'use client'

import { useState } from "react"
import CarouselGuest from "../CarouselGuest"
import { Dialog, DialogContent } from "../ui/dialog"
import LargeP from "../ui/LargeP"
// import ArrowDownIcon from "../ui/ArrowDownIcon"
// import DownButton from "../DownButton"
import { Separator } from "../ui/separator"
import ArrowDownComponent from "../ui/ArrowDownComponent"

interface GuestSectionProps {
    guest: string
}

const GuestSection: React.FC<GuestSectionProps> = ({ guest }) => {

    const [openImage, setOpenImage] = useState<string | null>(null)

    const newGuest = guest.toLowerCase()

    const openImageSelected = (imageUrl: string) => {
        setOpenImage(imageUrl)
    }

    return (
        <section id="invitado" className="snap-start h-full w-full fontStyles relative py-14 flex flex-col items-center text-center">
            <Dialog>
                <LargeP text="Contar con tu presencia será un capítulo invaluable en nuestra historia de amor.  Te esperamos." textColor="text-black" />
                <div className="py-14">
                    <h3 className="theNautigalFont leading-[55px]">{newGuest}</h3>
                    <Separator className="mt-3 w-[120px] mx-auto bg-black" />
                </div>
                <p className="text-[12px] mb-14">invitación especial</p>
                <CarouselGuest imageSelected={openImageSelected} />
                {openImage && (
                    <DialogContent className="w-[90%] p-0 border-none">
                        <div className="h-full">
                            <img src={openImage} alt="Camila y Camilo" className="w-full h-full object-cover" />
                        </div >
                    </DialogContent>
                )}
            </Dialog>
            <ArrowDownComponent />
        </section>
    )
}

export default GuestSection