import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}