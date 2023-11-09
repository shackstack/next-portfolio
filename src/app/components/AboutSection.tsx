'use client';
import React, { useTransition, useState, ReactNode } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: 'Main Language',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>React, Typescript, JavaScript</li>
        <li>React-query, Axios</li>
        <li>MSW, Jest, Cypress, Storybook</li>
        <li>Styled-components, Tailwind CSS</li>
        <li>zustand, recoil</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Woowacourse (2023.02 ~ 2023.11)</li>
        <li>Innovation Camp, Seoul (2022.08 ~ 2022.10)</li>
        <li>
          Bachelor of Restaurant Management, Sejong University (2016.03 ~
          2022.02)
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white py-48 min-h-screen' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/profile.jpg'
          alt='project'
          width={500}
          height={500}
          className='shadow-lg shadow-purple-800'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            깔끔하고 직관적인 디자인을 통해 사용자들이 원활하게 상호작용할 수
            있는 웹 개발에 열정을 쏟고 있습니다.
            <br />
            이러한 열정을 바탕으로 주간 활성 사용자 수(WAU) 2000명을 달성한
            경험이 있습니다.
            <br />
            <br />
            저는 React, TypeScript, Javascript 기반의 SPA 프로젝트와 미션을
            경험하며 개발역량을 쌓았습니다.
            <br />
            보다 나은 렌더링 방식을 통해 사용자 경험을 개선하고자 현재는
            NextJs를 학습하고 있습니다.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
