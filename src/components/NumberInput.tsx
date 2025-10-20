import React from "react"

interface NumberInputProps {
  label: string
  placeholder: string
  value: string
}

const NumberInput: React.FC<NumberInputProps> = ({ label, placeholder, value }) => (
  <div className="mb-4">
    <label className="text-white text-left text-sm block mb-1">{label}</label>
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      className="w-full bg-primary-light border-none rounded-full p-4 text-white placeholder:text-gray-300"
    />
  </div>
)

export default NumberInput
