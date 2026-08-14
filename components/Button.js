import Link from 'next/link'

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
}) {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primaryDark dark:bg-primary dark:hover:bg-primaryDark',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white',
    ghost: 'text-primary hover:bg-primary/10 dark:text-primary dark:hover:bg-primary/20',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${variants[variant]} ${sizes[size]} font-semibold rounded-lg transition-all duration-300 ${className}`

  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <a className={classes} target={target} rel={rel}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} type={type}>
      {children}
    </button>
  )
}