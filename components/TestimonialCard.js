import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 relative">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-primary/20 text-4xl absolute top-4 right-4" />
      
      {/* Stars */}
      <div className="flex gap-1 text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-sm" />
        ))}
      </div>
      
      {/* Text */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        "{testimonial.text}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xl font-bold text-gray-500">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )
}