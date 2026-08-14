import Layout from '../components/Layout'
import { user, experience, education, skills } from '../data/data'
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'

export default function About() {
  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Get to know me, my journey, and what drives me to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm {user.name}, a passionate {user.title} based in {user.location}. 
                I specialize in building full-stack applications that are not only functional 
                but also deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                With over 5 years of experience in the industry, I've worked with startups, 
                agencies, and enterprise companies to bring their digital visions to life. 
                My approach combines technical excellence with a keen eye for design.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, 
                mentoring junior developers, and exploring new technologies.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaBriefcase className="text-primary" /> Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-primary pl-4">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-lg font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" /> {exp.location}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {exp.date}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {exp.description.map((item, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-primary" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-secondary pl-4">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-secondary font-medium">{edu.school}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" /> {edu.location}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {edu.date}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Quick Info</h2>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full object-cover mb-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">{user.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href={`mailto:${user.email}`} className="text-primary hover:underline font-medium">
                    {user.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Skills</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {Object.values(skills).flat().slice(0, 6).map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={user.resume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryDark transition-colors font-semibold"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}