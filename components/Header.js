import { useState, useEffect } from 'react'
import Link from 'next/link'
import { user } from '../data/data'
import { useRouter } from 'next/router'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import Button from './Button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const isActive = (path) => router.pathname === path

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
            <span className="text-2xl md:text-3xl font-black tracking-tight">
              <span className="text-primary">S</span>B
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            <Button href="/contact" size="sm">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-medium text-lg transition-colors hover:text-primary ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button href="/contact" className="w-full text-center">
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}