import Image from 'next/image';
import { ReactNode } from 'react';

interface PortfolioItemProps {
  src: string;
  title: string;
  problemSituation: ReactNode;
  solvingProcess: ReactNode;
  isImage: boolean;
  size?: number;
}

const PortfolioItem = ({
  src,
  title,
  problemSituation,
  solvingProcess,
  isImage,
  size = 400,
}: PortfolioItemProps) => {
  return (
    <section className='text-white' id='about'>
      <div className='flex gap-8 items-center py-4 px-4 xl:gap-16 xl:px-16'>
        {isImage && (
          <Image
            alt='ecommerce'
            src={`/images/portfolio/${src}`}
            height={size}
            width={size}
          />
        )}
        <div className='text-left flex flex-col py-12'>
          <h2 className='text-2xl font-semibold text-white mb-4'>{title}</h2>
          <p className='text-base lg:text-lg'>
            [문제 상황]
            <br />
            {problemSituation}
            <br />
            <br /> [해결 과정]
            <br />
            {solvingProcess}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItem;
