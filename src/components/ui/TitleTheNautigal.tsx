interface TitleTheNautigalProps {
    className?: string
    text: string,
}

const TitleTheNautigal: React.FC<TitleTheNautigalProps> = ({ className, text }) => {
    return (
        <p className={`theNautigalFont text-gray-400 -mt-11 -mb-6 ${className}`}>{text}</p>
    )
}

export default TitleTheNautigal