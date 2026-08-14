import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaHeart, FaRegHeart } from 'react-icons/fa'

export default function ProjectCard({ project, featured = false }) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
      featured ? 'ring-2 ring-primary/20' : ''
    }`}>
      {/* Image Section */}
      <div className="relative h-56 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
            priority={featured}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-gray-400 dark:text-gray-600">
            {project.title.charAt(0)}
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies/Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags && project.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
          {project.tags && project.tags.length > 4 && (
            <span className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-medium">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium text-sm hover:underline flex items-center gap-1 group"
              >
                Live Demo 
                <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 text-sm"
              >
                <FaGithub className="text-base" /> Code
              </Link>
            )}
          </div>

          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            {isLiked ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className="text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}