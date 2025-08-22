import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkSection from '@/components/WorkSection';
import AchievementsSection from '@/components/AchievementsSection';
import StoriesSection from '@/components/StoriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <AchievementsSection />
      
      <StoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
