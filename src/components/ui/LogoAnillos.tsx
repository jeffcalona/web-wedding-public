import Image from "next/image"
import logoAnillos from '/public/icons/logoAnillos.svg'

interface logoAnillosProps {
    height: number
}

const LogoAnillos: React.FC<logoAnillosProps> = ({ height }) => {
    return (
        <Image src={logoAnillos} height={height} alt="Logo" />
    )
}

export default LogoAnillos