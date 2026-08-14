import { useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { user, socials } from '../data/data'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setStatus(''), 5000)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: user.email, link: `mailto:${user.email}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: user.location, link: null },
  ]

  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Connect with me</p>
                <div className="flex gap-3">
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FaLinkedinIn className="text-xl" />
                    </a>
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FaInstagram className="text-xl" />
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg font-medium animate-fade-in">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}