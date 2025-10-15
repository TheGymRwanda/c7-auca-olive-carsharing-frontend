import React from 'react'
import classNames from 'classnames'
import type { ButtonProps, ButtonVariant, ButtonSize } from '../util/types'

const Spinner = () => (
  <svg className="size-4 -ml-1 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      fullWidth = false,
      icon = null,
      loading = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses: Record<ButtonVariant, string> = {
      primary: 'bg-white text-primary-dark hover:bg-gray-50 focus:ring-primary-dark',
      secondary: 'bg-primary-dark text-white hover:bg-primary-light focus:ring-primary-dark',
      ghost: 'bg-ghost-light text-primary hover:bg-ghost-dark focus:ring-ghost-light',
      outlineWhite:
        'border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary focus:ring-primary',
      outlineIndigo:
        'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-white',
    }

    const sizeClasses: Record<ButtonSize, string> = {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
      xl: 'h-16 px-10 text-xl',
    }

    const buttonClasses = classNames(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      { 'w-full': fullWidth },
      className,
    )

    const isDisabled = disabled || loading

    return (
      <button ref={ref} className={buttonClasses} disabled={isDisabled} {...props}>
        {loading && <Spinner />}
        {icon && !loading && <span className="mr-2">{icon}</span>}
        {!loading && <>{children}</>}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
