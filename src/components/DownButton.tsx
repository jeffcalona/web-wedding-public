'use client'

import Link from "next/link"
import ArrowDownIcon from "./ui/ArrowDownIcon"

interface DownButtonProps {
    to: string
}

const DownButton: React.FC<DownButtonProps> = ({ to }) => {
    return (
        <div className="w-full flex justify-center absolute bottom-0 z-30">
            <Link href={to}>
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-30 cursor-pointer" />
            </Link>
        </div>
    )
}

export default DownButton