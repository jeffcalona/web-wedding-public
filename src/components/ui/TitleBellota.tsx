interface TitleBellotaProps {
    className?: string,
    text: string
}

const TitleBellota: React.FC<TitleBellotaProps> = ({ className, text }) => {
    return (
        <h3 className={`text-[56px] text-center ${className}`}>{text}</h3>
    )
}

export default TitleBellota