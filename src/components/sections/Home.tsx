import LogoIconCC from "@/components/ui/LogoIconCC";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Portada from '/public/images/Portada.jpg'
import ArrowDownIcon from "../ui/ArrowDownIcon";
// import DownButton from "../DownButton";

export default function Home() {
    return (
        <section id="inicio" className="snap-start h-screen w-full bg-black relative">
            <Image src={Portada} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" className="z-0" />
            <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
            <div className="w-full absolute top-0 z-20">
                <header className="flex justify-center pt-14">
                    <div className="transform scale-110">
                        <LogoIconCC color="white" />
                    </div>
                </header>
                <div className=" flex flex-col items-center mt-10">
                    <div className="w-[360px] text-center space-y-4">
                        <p className="fontStyles text-white !tracking-[0.5px] text-[16px]">En los caminos de la vida, encontramos un amor que trasciende las estaciones. Con corazones abiertos y llenos de gratitud, queremos invitarte a compartir esta nueva aventura juntos que aquí comienza, donde cada paso será dado de la mano de Dios.</p>
                        <Separator className="w-[120px] m-auto bg-white" />
                        <p className="fontStyles text-white !tracking-[0.5px] text-[16px]">28. 12. 2024</p>
                    </div>
                </div>
            </div>
            {/* <DownButton to="#invitado" /> */}
            <div className="w-full flex justify-center absolute bottom-16 z-30">
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-30" />
            </div>
        </section>
    );
}
