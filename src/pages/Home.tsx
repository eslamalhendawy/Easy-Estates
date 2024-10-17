import Hero from '@/components/Hero'
import ResidentialProperties from '@/components/ResidentialProperties'
import HowToHelp from '@/components/HowToHelp'
import FeaturedProperties from '@/components/FeaturedProperties'
import AppSection from '@/components/AppSection'

const Home = () => {
  return (
    <section>
      <Hero />
      <ResidentialProperties />
      <HowToHelp />
      <FeaturedProperties />
      <AppSection />
    </section>
  )
}

export default Home