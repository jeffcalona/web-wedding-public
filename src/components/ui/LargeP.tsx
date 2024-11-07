interface LargePPros {
    text: string,
    textColor: string
}

const LargeP: React.FC<LargePPros> = ({ text, textColor }) => {
    return (
        <p className={`fontStyles ${textColor} !tracking-[0.5px] text-sm w-[80%] mx-auto text-center`}>{text}</p>
    )
}

export default LargeP