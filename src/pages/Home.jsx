import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import CoursesSection from '../components/CoursesSection'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <StatsBar />
      <CoursesSection />
      <WhyUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
