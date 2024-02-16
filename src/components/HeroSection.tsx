'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.addEventListener('mousemove', (e: MouseEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rotateY = (-1 / 10) * x + 20;
      const rotateX = (1 / 10) * y - 20;

      childRef.current?.setAttribute(
        'style',
        `
        background-position : ${x / 5 + y + 5}%
      `
      );

      ref.current?.setAttribute(
        'style',
        `transform : perspective(1500px)
      rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    });
  }, [ref]);

  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={['Jeremy', 1000, 'FE Developer', 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            문제를 다양한 시각에서 분석하고 해결하는 것을 좋아하는 개발자
            김민석입니다.
          </p>
          <div>
            <Link
              href='https://github.com/shackstack'
              className='px-1 inline-block mr-3 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                My Github
              </span>
            </Link>
            <div className='px-6 inline-block mr-3 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>
              +82 10-5258-1305
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div
            ref={ref}
            className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/images/memoji.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
            <div
              ref={childRef}
              className='absolute rounded-full w-full h-full bg-[size:150%_150%] bg-[position:100%] bg-gradient-linear opacity-70 brightness-120'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
