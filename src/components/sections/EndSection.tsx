import Image from "next/image"
import EndSectionImage from '/public/images/EndSectionImage.jpg'
import LogoIconCC from "../ui/LogoIconCC"
// import ArrowDownComponent from "../ui/ArrowDownComponent"
import LargeP from "../ui/LargeP"
import AnillosIcon from "../ui/AnillosIcon"
import Link from "next/link"

const EndSection = () => {
    return (
        <section id="end" className="h-full relative flex justify-center items-center snap-start">
            <Image src={EndSectionImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
            <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
            <div className="w-full absolute top-0 z-20">
                <header className="flex justify-center pt-14">
                    <div className="transform scale-110">
                        <LogoIconCC color="white" />
                    </div>
                </header>
            </div>
            <div className="absolute z-20">
                <LargeP text="Para disfrutar de una velada especial, el evento será sólo para adultos." textColor="text-white" />
            </div>
            <div className="absolute z-20 bottom-40 w-full">
                <LargeP text="confirma tu asistencia" textColor="text-white" />
            </div>
            {/* <ArrowDownComponent rotate={true} /> */}
            <div className={`w-full flex justify-center absolute bottom-8 z-30`}>
                <Link href='#inicio'>
                    <AnillosIcon className="transform cursor-pointer fill-[#ffb700]" />
                </Link>
            </div>
        </section>
    )
}

export default EndSection