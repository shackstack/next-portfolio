import Navbar from '@/components/Navbar';
import File from './File.mdx';

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className='h-12' />
      <main className='px-24 pt-8 text-xl leading-10  bg-[#121212]'>
        <File />
      </main>
    </>
  );
};

export default Resume;
