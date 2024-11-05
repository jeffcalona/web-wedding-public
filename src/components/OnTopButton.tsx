'use client'

import { Link as LinkS } from 'react-scroll'
import ArrowDownIcon from './ui/ArrowDownIcon'

interface DownButtonProps {
    to: string
}


const OnTopButton: React.FC<DownButtonProps> = ({ to }) => {
    return (
        <div className="w-full flex justify-center absolute bottom-0 z-30">
            <LinkS to={to} spy={true} smooth={true} duration={800}>
                <ArrowDownIcon className="w-20 left-0 z-30 opacity-50 cursor-pointer rotate-180" />
            </LinkS>
        </div>
    )
}

export default OnTopButton