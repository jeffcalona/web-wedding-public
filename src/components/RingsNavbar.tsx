import Image from "next/image"
import NavbarImage from '/public/images/NavbarImage.jpg'

interface RingsNavbarProps {
    handleButton: () => void
}

const RingsNavbar: React.FC<RingsNavbarProps> = ({ handleButton }) => {
    return (
        <div className="w-screen h-screen fixed z-50 verflow-hiddeno">
            <Image src={NavbarImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
            <div className="absolute" onClick={handleButton}>
                cerrar
            </div>
        </div>
    )
}

export default RingsNavbar