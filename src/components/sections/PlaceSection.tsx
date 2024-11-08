import Image from "next/image"
import PlaceImage from '/public/images/PlaceImage.jpg'
import Link from "next/link"
import ArrowDownComponent from "../ui/ArrowDownComponent"
import LargeP from "../ui/LargeP"
import TitleBellota from "../ui/TitleBellota"

const PlaceSection = () => {
    return (
        <section id="el lugar" className="h-full relative fontStyles text-center snap-start">
            <TitleBellota text="el lugar" className="h-[10%]" />
            <div className="h-[90%] flex flex-col justify-between py-6">
                <div className="">
                    <LargeP text="centro de eventos y convenciones el castillo de santa marta" textColor="black" />
                </div>
                <div className="w-full min-h-[200px] relative m-auto">
                    <Image src={PlaceImage} alt="Lugar de la boda" layout="fill" objectFit="cover" />
                </div>
                <p className="text-xs mx-auto">fácil acceso de transporte</p>
                <div className="w-[220px] m-auto">
                    <div className="w-full h-[220px] mb-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.082046187371!2d-75.4787695!3d6.3834116000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e443bc862589df7%3A0xd812e6545be7329f!2sCENTRO%20DE%20EVENTOS%20Y%20CONVENCIONES%20EL%20CASTILLO%20DE%20SANTA%20MARTA!5e0!3m2!1ses!2ses!4v1730401017472!5m2!1ses!2ses"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"

                            className="w-full h-full"
                        />
                    </div>
                    <Link target="_blank" href='https://maps.app.goo.gl/184475Q857QWgtmv8' className="text-[10px] tracking-[0.2px] leading-3 hover:text-gray-600">
                        <p>Girardota-Parcelación El Limonar, Girardota, Vda. Curazao, Girardota, Antioquia, Colombia</p>
                    </Link>
                </div>
            </div>
            <ArrowDownComponent />
        </section>
    )
}

export default PlaceSection