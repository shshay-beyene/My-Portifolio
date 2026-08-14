import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { socials, user } from '../data/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
              <span className="text-2xl font-black">
                <span className="text-primary">S</span>B
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-sm">
              Building exceptional digital experiences with clean code and thoughtful design.
            </p>
            <div className="flex gap-4 mt-4">
              <a href={socials.github} target="_blank" rel="noopener" 
                 className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <FaGithub size={20} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener"
                 className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href={socials.twitter} target="_blank" rel="noopener"
                 className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href={socials.facebook} target="_blank" rel="noopener"
                 className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href={socials.instagram} target="_blank" rel="noopener"
                 className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} 
                        className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Have a project in mind? Let's work together.
            </p>
            <Link href="/contact" className="inline-block mt-3 text-primary font-medium hover:underline">
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-1">
            © {year} Shshay Beyene. Made with using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}