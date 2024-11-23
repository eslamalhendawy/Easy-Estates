// @ts-nocheck

import { useEffect } from "react";

import Hero from "@/components/Hero";
import ResidentialProperties from "@/components/ResidentialProperties";
import HowToHelp from "@/components/HowToHelp";
import FeaturedProperties from "@/components/FeaturedProperties";
import AppSection from "@/components/AppSection";

const Home = () => {
  useEffect(() => {
    document.title = "Easy Estates";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <ResidentialProperties />
      <HowToHelp />
      <FeaturedProperties />
      <AppSection />
    </main>
  );
};

export default Home;
