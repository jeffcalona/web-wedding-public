import LogoIconCC from "@/components/ui/LogoIconCC";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Portada from '/public/images/Portada.jpg'

export default function Home() {
  return (
    <main className="h-auto">
      <Image src={Portada} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
      <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
      <section className="w-full absolute top-0 z-20">
        <header className="flex justify-center pt-14">
          <div>
            <LogoIconCC color="white" />
          </div>
        </header>
        <div className=" flex flex-col items-center mt-8">
          <div className="w-[360px] text-center space-y-4">
            <p className="fontStyles text-white !tracking-[0.5px] text-[16px]">En los caminos de la vida, encontramos un amor que trasciende las estaciones. Con corazones abiertos y llenos de gratitud, queremos invitarte a compartir esta nueva aventura juntos que aquí comienza, donde cada paso será dado de la mano de Dios.</p>
            <Separator className="w-[120px] m-auto" />
            <p className="fontStyles text-white !tracking-[0.5px] text-[16px]">28. 12. 2024</p>
          </div>
        </div>
      </section>
    </main>
  );
}
