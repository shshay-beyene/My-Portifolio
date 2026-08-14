import { FaCalendar, FaMapMarkerAlt, FaAward } from 'react-icons/fa'

export default function EducationItem({ education, isLast = false }) {
  return (
    <div className={`relative pl-8 pb-8 ${!isLast ? 'border-l-2 border-secondary/30' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white dark:border-gray-800 shadow-md" />
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {education.degree}
            </h3>
            <p className="text-secondary font-medium">
              {education.school}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 whitespace-nowrap">
            <FaCalendar className="text-xs" /> {education.date}
          </span>
        </div>
        
        <div className="space-y-2">
          {education.location && (
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <FaMapMarkerAlt className="text-xs" /> {education.location}
            </p>
          )}
          {education.gpa && (
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <FaAward className="text-xs text-secondary" /> GPA: {education.gpa}
            </p>
          )}
          {education.description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              {education.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}