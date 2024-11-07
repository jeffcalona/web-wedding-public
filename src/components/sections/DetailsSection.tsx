import Image from "next/image"
import DetailsSectionImage from '/public/images/DetailsSectionImage.jpg'
import ArrowDownComponent from "../ui/ArrowDownComponent"

const DetailsSection = () => {
    return (
        <section id="detalles" className="h-full relative text-center fontStyles leading-[17px] flex flex-col justify-between snap-start">
            <h3 className="text-[56px] h-[10%] flex justify-center items-end">detalles</h3>
            <div className="h-[84%] flex flex-col justify-between">
                <p className="w-[300px] mx-auto h-[10%]">La recepción finalizará a las 2:00 a.m. del día siguiente. y para su comodidad, el lugar ofrece dos opciones:</p>
                <div className="h-[50%] flex flex-col justify-around">
                    <div className="w-[360px] m-auto">
                        <p className="theNautigalFont mb-4 text-gray-400">hospedaje</p>
                        <p>El lugar cuenta con alojamiento en una finca para los invitados, en habitaciones compartidas. El costo es de 100,000 COP por persona. Si desean reservar, por favor confírmenlo con anticipación, y nosotros nos encargaremos de coordinar su reserva.</p>
                    </div>
                    <div className="w-[360px] m-auto">
                        <p className="theNautigalFont mb-4 text-gray-400">transporte</p>
                        <p>Un autobús estará disponible a las 2:00 a.m. en la puerta del lugar, para llevar a quienes prefieran regresar a la ciudad.</p>
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