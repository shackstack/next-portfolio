import AboutSection from '@/app/components/AboutSection';
import HeroSection from '@/app/components/HeroSection';
import Navbar from '@/app/components/Navbar';
import ProjectsSection from '@/app/components/ProjectSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
