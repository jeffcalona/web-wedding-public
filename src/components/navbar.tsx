'use client'

import Image from "next/image"
import AnillosIcon from "./ui/AnillosIcon"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import NavbarImage from '/public/images/NavbarImage.jpg'
import { useState } from "react"
import Link from "next/link"

const navbarTitles = [
    { id: 1, title: 'inicio' },
    { id: 2, title: 'invitado' },
    { id: 3, title: 'fecha' },
    { id: 4, title: 'agenda' },
    { id: 5, title: 'el lugar' },
    { id: 6, title: 'detalles' },
    { id: 7, title: 'la ropa' }
]


const Navbar = () => {

    const [isSelected, setIsSelected] = useState('home')
    console.log('isSelected ', isSelected)

    const handleSetAcive = (to: string) => {
        setIsSelected(to)
    }

    return (
        <Sheet>
            <SheetTrigger asChild className="w-full flex justify-end p-8">
                <div className="w-full flex justify-end p-8 fixed z-50">
                    <AnillosIcon color="#9ca3af" className="cursor-pointer" />
                </div>
            </SheetTrigger>
            <SheetContent className="w-[100%] border-none flex justify-center items-center">
                <SheetTitle className="absolute z-0 opacity-0"></SheetTitle>
                <Image src={NavbarImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
                <div className="bg-black w-full h-full absolute top-0 right-0 opacity-50" />
                <SheetDescription className="absolute space-y-[68px] flex flex-col">
                    {navbarTitles.map((data) => (
                        <SheetClose key={data.id} asChild>
                            <Link href={`#${data.title}`} onClick={() => handleSetAcive(data.title)} className='fontStyles !text-[45px] text-white text-center cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-[3px]'>
                                {data.title}
                            </Link>
                        </SheetClose>
                    ))}
                    <SheetClose asChild className="flex justify-center">
                        <Link href="#end" onClick={() => handleSetAcive('end')} >
                            <AnillosIcon color="white" className="transform scale-150 cursor-pointer" />
                        </Link>
                    </SheetClose>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default Navbar