'use client';
import React, {
  useTransition,
  useState,
  ReactNode,
  useEffect,
  useRef,
  MutableRefObject,
} from 'react';
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
        <li>우아한테크코스 (2023.02 ~ 2023.11)</li>
        <li>이노베이션 캠프 in 서울 (2022.08 ~ 2022.10)</li>
        <li>세종대학교 외식경영학 학사 (2016.03 ~ 2022.02)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    ref.current?.addEventListener('mousemove', (e: MouseEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rotateY = (-2 / 25) * x + 20;
      const rotateX = (2 / 25) * y - 20;

      ref.current?.setAttribute(
        'style',
        `transform : perspective(1500px)
      rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    });

    ref.current?.addEventListener('mouseout', () => {
      ref.current?.setAttribute(
        'style',
        `transform : perspective(1500px)
      rotateX(0deg) rotateY(0deg)`
      );
    });
  }, [ref]);

  return (
    <section className='py-48 min-h-screen dark:text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='flex flex-col'>
          <div ref={ref}>
            <Image
              src='/images/profile.jpg'
              alt='project'
              width={500}
              height={500}
              className='shadow-lg shadow-purple-800'
            />
          </div>
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold dark:text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            안녕하세요😃
            <br />
            저는 대학에서 우연히 접한 교양 프로그래밍 과목을 통해 개발에
            입문하게 되었습니다.
            <br />
            그리고 졸업 이후 프론트엔드 개발자로 성장하고자 우아한형제들 주관
            개발자 양성프로그램인 우아한테크코스에서 개발 역량을 쌓았습니다.
            <br />
            10개월 교육과정인 이 프로그램은 레벨 1~5로 커리큘럼이
            구성되었습니다.
            <br />
            레벨1 에서는 바닐라 자바스크립트만으로 웹 서비스를 배포하는 미션을
            페어 프로그래밍을 통해 진행하였습니다.
            <br />
            레벨2 에서는 Typescript와 React를 미션을 통해 학습하였습니다.
            <br />
            레벨3-4 에서는 백엔드 크루들과 함께 4개월에 걸쳐 팀 프로젝트를
            진행하였습니다. 이 과정에서 협업 역량은 물론 github Action을 통해
            CI/CD, npm 배포 등의 개발 역량 또한 쌓을 수 있었습니다.
            <br />
            우아한테크코스를 이수하며 진행하였던 미션과 프로젝트는 아래에서
            확인하실 수 있습니다.
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
