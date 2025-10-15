import React, { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlineWhite' | 'outlineIndigo'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

export interface CarDetailsProps {
  carName: string
  owner: string
  model: string
  plate: string
  horsepower: string
  fuelType: string
  restriction: string
  image: string
}

export interface CarCardProps {
  carId: number
  carName: string
  carOwner?: string
  carType?: string
  carImage?: string
}

export interface MainLayoutProps {
  children?: ReactNode
}

export interface MenuBarProps {
  isDrawerOpen: boolean
  toggleDrawer: () => void
}
