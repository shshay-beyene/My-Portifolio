import { useEffect, useRef, useState } from 'react'

export default function StatsCounter({ number, label, suffix = '', delay = 0 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  // Parse number (handle "5+" type strings)
  const targetNumber = parseInt(number.replace(/[^0-9]/g, '')) || 0
  const hasPlus = number.includes('+')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      let current = 0
      const increment = Math.ceil(targetNumber / 50)
      const interval = setInterval(() => {
        current += increment
        if (current >= targetNumber) {
          setCount(targetNumber)
          clearInterval(interval)
        } else {
          setCount(current)
        }
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, targetNumber, delay])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-black gradient-text">
        {count}
        {hasPlus && '+'}
        {suffix}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {label}
      </div>
    </div>
  )
}