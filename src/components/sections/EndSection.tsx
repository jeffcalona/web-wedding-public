import Image from "next/image"
import EndSectionImage from '/public/images/EndSectionImage.jpg'
import LogoIconCC from "../ui/LogoIconCC"
import ArrowDownIcon from "../ui/ArrowDownIcon"
// import OnTopButton from "../OnTopButton"

const EndSection = () => {
    return (
        <section id="end" className="h-screen relative flex justify-center items-center snap-start">
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
            {/* <OnTopButton to="#inicio" /> */}
            <div className="w-full flex justify-center absolute bottom-16 z-30">
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-40 rotate-180" />
            </div>
        </section>
    )
}

export default EndSection