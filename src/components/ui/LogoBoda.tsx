import Image from "next/image"
import logoCC from '/public/icons/logoCC.svg'

interface logoBodaProps {
    height: number,
}

const LogoBoda: React.FC<logoBodaProps> = ({ height }) => {
    return (
        <Image src={logoCC} priority height={height} alt="Logo" className="w-auto" />
    )
}

export default LogoBoda