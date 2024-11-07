import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Portada from '/public/images/Portada.jpg'
import HeaderLogo from "../ui/HeaderLogo";
import LargeP from "../ui/LargeP";
import ArrowDownComponent from "../ui/ArrowDownComponent";

export default function Home() {
    return (
        <section id="inicio" className="snap-start h-full w-full bg-black relative">
            <Image src={Portada} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" className="z-0" />
            <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
            <div className="w-full absolute top-0 z-20">
                <HeaderLogo />
                <div className=" flex flex-col items-center mt-8">
                    <div className="text-center space-y-4">
                        <LargeP text="En los caminos de la vida, encontramos un amor que trasciende las estaciones. Con corazones abiertos y llenos de gratitud, queremos invitarte a compartir esta nueva aventura juntos que aquí comienza, donde cada paso será dado de la mano de Dios." textColor="text-white" />
                        <Separator className="w-[120px] m-auto bg-white" />
                        <p className="fontStyles text-white !tracking-[0.5px] text-[16px]">28. 12. 2024</p>
                    </div>
                </div>
            </div>
            <ArrowDownComponent />
        </section>
    );
}
