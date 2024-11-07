import Image from "next/image"
import EndSectionImage from '/public/images/EndSectionImage.jpg'
import LogoIconCC from "../ui/LogoIconCC"
import ArrowDownComponent from "../ui/ArrowDownComponent"

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
            <p className="w-[360px] m-auto fontStyles text-white text-center absolute z-20 leading-[17px]">Para disfrutar de una velada especial, agradecemos que este sea un evento solo para adultos.</p>
            <p className="w-[360px] mx-auto fontStyles text-white text-center absolute bottom-36 z-20">confirma tu asistencia</p>
            <ArrowDownComponent rotate={true} />
        </section>
    )
}

export default EndSection