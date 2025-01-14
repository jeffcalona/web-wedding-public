import ArrowDownIcon from "./ArrowDownIcon"

interface ArrowDownComponentProps {
    rotate?: boolean
}

const ArrowDownComponent: React.FC<ArrowDownComponentProps> = ({ rotate = false }) => {
    return (
        <div className={`w-full flex justify-center absolute bottom-2 z-30 ${rotate && 'rotate-180'}`}>
            <ArrowDownIcon className="w-14 left-0 opacity-30" />
        </div>
    )
}

export default ArrowDownComponent