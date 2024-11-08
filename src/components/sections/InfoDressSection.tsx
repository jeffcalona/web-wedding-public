import Image from "next/image"
import InfoDressSectionImage from '/public/images/InfoDressSectionImage.jpg'
import ArrowDownComponent from "../ui/ArrowDownComponent"
import LargeP from "../ui/LargeP"

const InfoDressSection = () => {
    return (
        <section id="info" className="h-full relative flex justify-center items-center snap-start">
            <Image src={InfoDressSectionImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
            <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
            <div className="absolute z-20">
                <LargeP text="Su presencia es el mejor regalo para nosotros, pero si desean hacernos un detalle adicional, una lluvia de sobres será bienvenida con mucho cariño." textColor="text-white" />
            </div>
            <ArrowDownComponent />
        </section>
    )
}

export default InfoDressSection