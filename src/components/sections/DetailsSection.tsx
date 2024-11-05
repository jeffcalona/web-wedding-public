import Image from "next/image"
import DetailsSectionImage from '/public/images/DetailsSectionImage.jpg'
import ArrowDownIcon from "../ui/ArrowDownIcon"
// import DownButton from "../DownButton"

const DetailsSection = () => {
    return (
        <section id="detalles" className="h-screen relative text-center fontStyles leading-[17px] flex flex-col justify-between snap-start">
            <h3 className="text-[56px] h-[10%] flex justify-center items-end">detalles</h3>
            <div className="h-[84%] flex flex-col justify-between">
                <p className="w-[300px] mx-auto h-[10%]">La recepción finalizará a las 2:00 a.m. del día siguiente. y para su comodidad, el lugar ofrece dos opciones:</p>
                <div className="h-[50%] flex flex-col justify-around">
                    <div className="w-[360px] m-auto">
                        <p className="theNautigalFont mb-4 text-gray-400">hospedaje</p>
                        <p>El lugar cuenta con alojamiento disponible para los invitados. El costo es de 100,000 COP por persona. Si desean reservar, por favor confírmenlo con anticipación, y la recepción del hotel se comunicará con ustedes para agilizar el proceso de reserva.</p>
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
            {/* <DownButton to="#info" /> */}
            <div className="w-full flex justify-center absolute bottom-0 z-30">
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-30" />
            </div>
        </section>
    )
}

export default DetailsSection