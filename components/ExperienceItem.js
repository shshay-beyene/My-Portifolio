import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'

export default function ExperienceItem({ experience, isLast = false }) {
  return (
    <div className={`relative pl-8 pb-8 ${!isLast ? 'border-l-2 border-primary/30' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-800 shadow-md" />
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-primary font-medium">
              {experience.company}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 whitespace-nowrap">
            <FaCalendar className="text-xs" /> {experience.date}
          </span>
        </div>
        
        {experience.location && (
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-3">
            <FaMapMarkerAlt className="text-xs" /> {experience.location}
          </p>
        )}
        
        <ul className="space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}