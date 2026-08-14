export default function SkillBadge({ 
  skill, 
  size = 'md',
  color = 'primary',
  className = '' 
}) {
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  const colors = {
    primary: 'bg-primary/10 text-primary dark:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary dark:bg-secondary/20',
    gray: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  }

  return (
    <span className={`${sizes[size]} ${colors[color]} rounded-full font-medium ${className}`}>
      {skill}
    </span>
  )
}