import React, { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from '../assets/ChevronDownIcon'

interface DropdownProps {
  label: string
  options: string[]
  selectedValue: string
  onSelect: (value: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="mb-4">
      <label className="text-white text-left text-sm block mb-1">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-primary-light border-none rounded-full p-4 text-white placeholder:text-gray-300 flex justify-between items-center"
      >
        <span>{selectedValue || `Select ${label.toLowerCase()}`}</span>
        <span className="text-gray-300">
          <ChevronDownIcon />
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-primary-light text-white rounded-lg mt-1 w-full max-h-40 overflow-y-auto">
          {options.map(option => (
            <li
              key={option}
              onClick={() => onSelect(option)}
              className="p-2 hover:bg-primary-dark cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
