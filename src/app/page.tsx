import AboutSection from '@/app/components/AboutSection';
import HeroSection from '@/app/components/HeroSection';
import Navbar from '@/app/components/Navbar';
import ProjectsSection from './components/Project/ProjectSection';
import DownloadButton from './components/Resume/Resume';
import Resume from './components/Resume/Resume';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* <section id='resume' className='pt-24 min-h-screen'>
          <Resume />
        </section> */}
      </div>
    </main>
  );
}
