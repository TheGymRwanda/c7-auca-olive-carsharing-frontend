import { IconProps } from "../util/types"

const ChevronDownIcon = ({ className }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    <path d="M6 9L12 15L18 9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default ChevronDownIcon
