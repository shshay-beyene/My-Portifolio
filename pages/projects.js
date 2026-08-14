import { useState } from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/data'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', ...new Set(projects.flatMap(p => p.tags))]
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter))

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            A collection of my recent work showcasing my skills in web development, 
            design, and problem-solving.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found with this filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}