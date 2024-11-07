import Image from "next/image"
import ScheduleSectionImg from '/public/images/ScheduleSectionImg.jpg'
import ArrowDownComponent from "../ui/ArrowDownComponent"

const SchedulesSection = () => {
    return (
        <section id="agenda" className="h-full relative text-center fontStyles leading-[17px] snap-start">
            <h3 className="text-[56px] h-[10%] flex justify-center items-end">agenda</h3>
            <div className="h-[90%] flex flex-col justify-between">
                <div className="w-[360px] m-auto">
                    <p className="text-[56px]">5:30</p>
                    <p className="theNautigalFont mt-4 mb-2 text-gray-400">ceremonia</p>
                    <p>Te invitamos a ser testigo de nuestra promesa de amor eterno, acompáñanos a dar el si en el sacramento del matrimonio.</p>
                </div>
                <div className="w-full h-[200px] relative">
                    <Image src={ScheduleSectionImg} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
                </div>
                <div className="w-[360px] m-auto">
                    <p className="text-[56px]">6:30</p>
                    <p className="theNautigalFont mt-4 mb-2 text-gray-400">recepción</p>
                    <p>Esta historia continúa en la pista de baile, únete a nosotros para una noche inolvidable, disfrutemos de un banquete lleno de sabores, buena música, grandes amigos y familia.</p>
                </div>
                <p className="h-[120px]">28. 12. 2024</p>
            </div>
            <ArrowDownComponent />
        </section>
    )
}

export default SchedulesSection