export default function SectionTitle({ 
  children, 
  subtitle, 
  centered = false,
  className = '' 
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}