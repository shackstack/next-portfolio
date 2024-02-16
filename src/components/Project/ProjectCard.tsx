import React from 'react';
import Link from 'next/link';
import BracketIcon from '@/assets/icons/bracket.svg';
import EyeIcon from '@/assets/icons/eye.svg';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string | null;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className='h-52 w-52 md:h-72 md:w-72 rounded-t-xl relative group shadow-lg shadow-purple-800'
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}>
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
          <Link
            href={gitUrl}
            className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
            <BracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
          </Link>
          {previewUrl && (
            <Link
              href={previewUrl}
              className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
            </Link>
          )}
        </div>
      </div>
      <div className='dark:text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
