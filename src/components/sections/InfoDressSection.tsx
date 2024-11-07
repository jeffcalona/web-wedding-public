import Image from "next/image"
import InfoDressSectionImage from '/public/images/InfoDressSectionImage.jpg'
import ArrowDownComponent from "../ui/ArrowDownComponent"

const InfoDressSection = () => {
    return (
        <section id="info" className="h-full relative flex justify-center items-center snap-start">
            <Image src={InfoDressSectionImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
            <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
            <p className="w-[360px] absolute fontStyles text-white text-center z-20 leading-[17px]">Su presencia es el mejor regalo para nosotros, pero si desean hacernos un detalle adicional, una lluvia de sobres será bienvenida con mucho cariño.</p>
            <ArrowDownComponent />
        </section>
    )
}

export default InfoDressSection