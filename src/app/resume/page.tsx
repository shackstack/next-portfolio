import Navbar from '@/components/Navbar';
import File from './File.mdx';

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className='h-12' />
      <div className='flex flex-col items-center  dark:bg-[#121212]'>
        <article className='max-w-full prose prose-lg dark:prose-invert'>
          <File />
        </article>
      </div>
    </>
  );
};

export default Resume;
