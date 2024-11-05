import * as React from "react"
import { SVGProps } from "react"
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={128}
        height={128}
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m7 7 10 10M7 17 17 7"
        />
    </svg>
)
export default CloseIcon
