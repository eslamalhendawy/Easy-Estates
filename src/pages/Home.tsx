import Hero from '@/components/Hero'
import ResidentialProperties from '@/components/ResidentialProperties'
import HowToHelp from '@/components/HowToHelp'
import FeaturedProperties from '@/components/FeaturedProperties'

const Home = () => {
  return (
    <div>
      <Hero />
      <ResidentialProperties />
      <HowToHelp />
      <FeaturedProperties />
    </div>
  )
}

export default Home