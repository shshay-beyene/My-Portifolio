import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
}

export default function SocialLinks({ 
  links, 
  size = 'md',
  className = '',
  showLabels = false 
}) {
  const sizes = {
    sm: 'text-base p-2',
    md: 'text-xl p-3',
    lg: 'text-2xl p-4',
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {Object.entries(links).map(([platform, url]) => {
        const Icon = socialIcons[platform]
        if (!Icon || !url) return null

        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizes[size]} bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 rounded-lg flex items-center gap-2 group`}
            aria-label={platform}
          >
            <Icon className="group-hover:scale-110 transition-transform" />
            {showLabels && (
              <span className="capitalize text-sm font-medium">{platform}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}