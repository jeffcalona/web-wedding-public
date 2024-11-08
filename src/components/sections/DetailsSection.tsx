import Image from "next/image"
import DetailsSectionImage from '/public/images/DetailsSectionImage.jpg'
import ArrowDownComponent from "../ui/ArrowDownComponent"
import TitleBellota from "../ui/TitleBellota"
import LargeP from "../ui/LargeP"
import TitleTheNautigal from "../ui/TitleTheNautigal"

const DetailsSection = () => {
    return (
        <section id="detalles" className="h-full relative text-center fontStyles flex flex-col justify-between snap-start">
            <TitleBellota text="detalles" className="h-[10%]" />
            <div className="h-[88%] flex flex-col justify-between">
                <LargeP text="La recepción finalizará a las 2:00 a.m. Y para su comodidad, el lugar ofrece dos opciones:" />
                <div className="h-[50%] flex flex-col justify-around">
                    <div className="m-auto">
                        <TitleTheNautigal text="hospedaje" />
                        <LargeP text="El lugar cuenta con alojamiento en una finca para los invitados, en habitaciones compartidas. El costo es de 100,000 COP por persona. Si desean reservar, por favor confírmenlo con anticipación, y nosotros nos encargaremos de coordinar su reserva." />
                    </div>
                    <div className="m-auto">
                        <TitleTheNautigal text="transporte" />
                        <LargeP text="Un autobús estará disponible a las 2:00 a.m. en la puerta del lugar, para llevar a quienes prefieran regresar a la ciudad." />
                    </div>
                </div>
                <div className="w-full h-[35%] relative">
                    <Image src={DetailsSectionImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
                    <div className="bgDetailsGradient" />
                </div>
            </div>
            <ArrowDownComponent />
        </section>
    )
}

export default DetailsSection