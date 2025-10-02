import React from 'react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link'
  | 'success'
  | 'warning'
  | 'info'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      fullWidth = false,
      icon = null,
      iconPosition = 'left',
      loading = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
      primary:
        'bg-white text-teal-700 hover:bg-gray-50 focus:ring-teal-500 shadow-sm hover:shadow-md',
      secondary:
        'text-white hover:bg-teal-700 focus:ring-teal-500 bg-[#226485] shadow-sm hover:shadow-md',
      outline:
        'border-2 border-white text-white bg-transparent hover:bg-white hover:text-teal-700 focus:ring-white',
      ghost: 'text-teal-700 hover:bg-teal-50 focus:ring-teal-500',
      destructive:
        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
      success:
        'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md',
      warning:
        'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-sm hover:shadow-md',
      info: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
      link: 'text-teal-600 underline-offset-4 hover:underline focus:ring-teal-500 p-0 h-auto',
    }

    const sizeClasses = {
      xs: 'h-8 px-3 text-xs gap-1',
      sm: 'h-9 px-4 text-sm gap-1.5',
      md: 'h-12 px-6 text-base gap-2',
      lg: 'h-14 px-8 text-lg gap-2.5',
      xl: 'h-16 px-10 text-xl gap-3',
    }

    const widthClass = fullWidth ? 'w-full' : ''
    const flexDirectionClass = iconPosition === 'right' ? 'flex-row-reverse' : ''

    const buttonClasses =
      `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${flexDirectionClass} ${className}`.trim()

    const isDisabled = disabled || loading

    const renderIcon = () => {
      if (loading) {
        return (
          <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )
      }
      return icon ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {renderIcon()}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
