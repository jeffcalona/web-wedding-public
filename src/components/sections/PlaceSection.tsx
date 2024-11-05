import Image from "next/image"
import PlaceImage from '/public/images/PlaceImage.jpg'
import Link from "next/link"
import ArrowDownIcon from "../ui/ArrowDownIcon"
// import DownButton from "../DownButton"

const PlaceSection = () => {
    return (
        <section id="el lugar" className="h-screen relative fontStyles text-center leading-[17px] snap-start">
            <h3 className="text-[56px] h-[10%] flex justify-center items-end">el lugar</h3>
            <div className="h-[90%] flex flex-col justify-between py-14">
                <p className="w-[300px] mx-auto">centro de eventos y convenciones el castillo de santa marta</p>
                <div className="w-full h-[200px] relative m-auto">
                    <Image src={PlaceImage} alt="Lugar de la boda" layout="fill" objectFit="cover" />
                </div>
                <p className="w-[300px] mx-auto">fácil acceso de transporte</p>
                <div className="w-[220px] m-auto">
                    <div className="w-full h-[220px] mb-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.082046187371!2d-75.4787695!3d6.3834116000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e443bc862589df7%3A0xd812e6545be7329f!2sCENTRO%20DE%20EVENTOS%20Y%20CONVENCIONES%20EL%20CASTILLO%20DE%20SANTA%20MARTA!5e0!3m2!1ses!2ses!4v1730401017472!5m2!1ses!2ses"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"

                            className="w-full h-full"
                        />
                    </div>
                    <Link target="_blank" href='https://maps.app.goo.gl/184475Q857QWgtmv8' className="text-[10px] tracking-[0.2px] leading-[0.1px] hover:text-gray-600">Girardota-Parcelación El Limonar, Girardota, Vda. Curazao, Girardota, Antioquia, Colombia</Link>
                </div>
            </div>
            {/* <DownButton to="#detalles" /> */}
            <div className="w-full flex justify-center absolute bottom-0 z-30">
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-30" />
            </div>
        </section>
    )
}

export default PlaceSection