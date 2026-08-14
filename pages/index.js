import Layout from '../components/Layout'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import { user, stats, projects, skills } from '../data/data'
import { FaArrowRight, FaCode, FaPalette, FaRocket } from 'react-icons/fa'

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured)

  const services = [
    { icon: FaCode, title: "Web Development", desc: "Full-stack applications with modern frameworks and best practices." },
    { icon: FaPalette, title: "UI/UX Design", desc: "Beautiful, user-centered designs that drive engagement and conversion." },
    { icon: FaRocket, title: "Performance Optimization", desc: "Lightning-fast load times and smooth user experiences." },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="animate-slide-up">
              <div className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-medium text-sm mb-6">
                👋 Welcome to my portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                Hi, I'm <span className="gradient-text">{user.name}</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                {user.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mb-8">
                {user.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/projects" size="lg">
                  View My Work <FaArrowRight className="inline ml-2" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Let's Talk
                </Button>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-black gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <h2 className="section-title text-center">
            What I <span className="gradient-text">Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="text-2xl text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <Button href="/projects" variant="ghost">
              View All <FaArrowRight className="inline ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <h2 className="section-title text-center">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-bold capitalize mb-4 text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always open to discussing new opportunities.
            </p>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}