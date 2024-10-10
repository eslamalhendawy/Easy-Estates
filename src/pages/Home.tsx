import Hero from '@/components/Hero'
import ResidentialProperties from '@/components/ResidentialProperties'
import HowToHelp from '@/components/HowToHelp'
import FeaturedProperties from '@/components/FeaturedProperties'
import AppSection from '@/components/AppSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <ResidentialProperties />
      <HowToHelp />
      <FeaturedProperties />
      <AppSection />
    </div>
  )
}

export default Home