'use client'

import { useState } from "react"
import CarouselGuest from "../CarouselGuest"
import { Dialog, DialogContent } from "../ui/dialog"
import LargeP from "../ui/LargeP"
import { Separator } from "../ui/separator"
import ArrowDownComponent from "../ui/ArrowDownComponent"
import Image from "next/image"

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
        <section id="invitado" className="snap-start h-full fontStyles relative py-14 flex flex-col items-center text-center">
            <Dialog>
                <LargeP text="Contar con tu presencia será un capítulo invaluable en nuestra historia de amor.  Te esperamos." textColor="text-black" />
                <div className="py-14 w-full">
                    <h3 className="theNautigalFont leading-[55px] w-[75%] mx-auto">{newGuest}</h3>
                    <Separator className="mt-3 w-[120px] mx-auto bg-black" />
                </div>
                <p className="text-[12px] mb-14">invitación especial</p>
                <CarouselGuest imageSelected={openImageSelected} />
                {openImage && (
                    <DialogContent className="w-[90%] h-[70%] p-0 border-none">
                        <div className="h-full relative">
                            <Image src={openImage} alt="Camila y Camilo" layout="fill" objectFit="cover" />
                        </div >
                    </DialogContent>
                )}
            </Dialog>
            <ArrowDownComponent />
        </section>
    )
}

export default GuestSection