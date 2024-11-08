import Image from "next/image"
import ScheduleSectionImg from '/public/images/ScheduleSectionImg.jpg'
import ArrowDownComponent from "../ui/ArrowDownComponent"
import LargeP from "../ui/LargeP"
import TitleBellota from "../ui/TitleBellota"
import TitleTheNautigal from "../ui/TitleTheNautigal"

const SchedulesSection = () => {
    return (
        <section id="agenda" className="h-full w-full relative text-center fontStyles snap-start">
            <TitleBellota text="agenda" className="h-[10%]" />
            <div className="h-[90%] flex flex-col justify-between">
                <div className="min-h-[30%]">
                    <TitleBellota text="5:30" />
                    <TitleTheNautigal text="ceremonia" />
                    <LargeP text="Te invitamos a ser testigo de nuestra promesa de amor eterno, acompáñanos a dar el si en el sacramento del matrimonio." textColor="text-black" />
                </div>
                <div className="w-full h-[30%] overflow-hidden relative">
                    <Image src={ScheduleSectionImg} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
                </div>
                <div className="min-h-[30%]">
                    <TitleBellota text="6:30" />
                    <TitleTheNautigal text="recepción" />
                    <LargeP text="Esta historia continúa en la pista de baile, únete a nosotros para una noche inolvidable, disfrutemos de un banquete lleno de sabores, buena música, grandes amigos y familia." textColor="text-black" />
                </div>
                <p className="h-[10%] flex justify-center items-top">28. 12. 2024</p>
            </div>
            <ArrowDownComponent />
        </section>
    )
}

export default SchedulesSection