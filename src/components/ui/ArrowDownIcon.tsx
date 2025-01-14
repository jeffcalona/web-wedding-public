import * as React from "react"
import { SVGProps } from "react"
const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={128}
        // height={128}
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m7 10 5 5 5-5"
        />
    </svg>
)
export default ArrowDownIcon
