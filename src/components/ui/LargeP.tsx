interface LargePPros {
    text: string,
    textColor?: string,
    width?: string
}

const LargeP: React.FC<LargePPros> = ({ text, textColor = 'text-black', width = 'w-[80%]' }) => {
    return (
        <p className={`fontStyles ${textColor} ${width} mx-auto text-center leading-4`}>{text}</p>
    )
}

export default LargeP