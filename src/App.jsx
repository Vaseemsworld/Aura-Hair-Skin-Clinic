import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Transformations from './components/Transformations'
import Gallery from './components/Gallery'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import BookAppointment from './components/BookAppointment'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Transformations />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <BookAppointment />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
