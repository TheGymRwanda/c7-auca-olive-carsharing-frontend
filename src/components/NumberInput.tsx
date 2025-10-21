import React from "react"
import { InputProps } from "../util/types"

const NumberInput: React.FC<InputProps> = ({ label, placeholder, value }) => (
  <div className="mb-4 font-inter">
    <label className="text-white text-left text-sm block mb-1">{label}</label>
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      className="w-full bg-primary-inputbg border-none rounded-full p-4 text-white placeholder:text-gray-300"
    />
  </div>
)

export default NumberInput
