import React from "react"
import { InputProps } from "../util/types"

const input: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => (
  <div className="mb-4 font-inter">
    <label className="text-white text-left text-sm block mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-primary-inputbg border-none rounded-full p-4 text-white placeholder:text-gray-300"
    />
  </div>
)

export default input
