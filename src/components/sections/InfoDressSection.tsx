import Image from "next/image"
import InfoDressSectionImage from '/public/images/InfoDressSectionImage.jpg'
import ArrowDownIcon from "../ui/ArrowDownIcon"
// import DownButton from "../DownButton"

const InfoDressSection = () => {
    return (
        <section id="info" className="h-screen relative flex justify-center items-center snap-start">
            <Image src={InfoDressSectionImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
            <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
            <p className="w-[360px] absolute fontStyles text-white text-center z-20 leading-[17px]">Su presencia es el mejor regalo para nosotros, pero si desean hacernos un detalle adicional, una lluvia de sobres será bienvenida con mucho cariño.</p>
            {/* <DownButton to="#la ropa" /> */}
            <div className="w-full flex justify-center absolute bottom-16 z-30">
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-30" />
            </div>
        </section>
    )
}

export default InfoDressSection