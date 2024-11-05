interface ColorProps {
    color: string
}

const Color: React.FC<ColorProps> = ({ color }) => {
    return (
        <div className={`w-[50px] h-[50px] rounded-full ${color}`} />
    )
}

export default Color