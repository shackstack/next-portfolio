'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectTag from './ProjectTag';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Celuveat',
    description: '셀럽들이 다녀간 맛집 소개 서비스',
    image: '/images/project/celuveat-thumbnail.png',
    tag: ['All', 'Project'],
    gitUrl: 'https://github.com/woowacourse-teams/2023-celuveat',
    previewUrl: 'https://www.celuveat.com/',
  },
  {
    id: 2,
    title: 'Next Celuveat',
    description: '우아한테크코스 Nextjs 클론코딩 미션',
    image: '/images/project/next-celuveat-thumbnail.png',
    tag: ['All', 'Mission'],
    gitUrl: 'https://github.com/shackstack/next-celuveat',
    previewUrl: 'https://celuveat.vercel.app/',
  },
  {
    id: 3,
    title: 'E-commerce',
    description: '우아한테크코스 장바구니 미션',
    image: '/images/project/tiffany-thumbnail.png',
    tag: ['All', 'Mission'],
    gitUrl: 'https://github.com/shackstack/react-shopping-cart-prod',
    previewUrl: 'https://tiffanyc0.vercel.app/',
  },
  {
    id: 4,
    title: 'Payments',
    description: '우아한테크코스 페이먼츠 미션',
    image: '/images/project/payments-thumbnail.png',
    tag: ['All', 'Mission'],
    gitUrl: 'https://github.com/shackstack/react-payments',
    previewUrl: 'https://shackstack.github.io/react-payments',
  },
  {
    id: 5,
    title: 'Clock app',
    description: '타이머 스톱워치 알람기능이 있는 시계 앱',
    image: '/images/project/timer-thumbnail.png',
    tag: ['All', 'Project'],
    gitUrl: 'https://github.com/shackstack/react-timer',
    previewUrl: 'https://react-timer-gqov-bv9ol8urw-shackstack.vercel.app/',
  },
  {
    id: 6,
    title: 'Earth, us',
    description:
      '사용자들이 자신의 일상과 제로 웨이스트 실천 노하우를 공유할 수 있는 커뮤니티 제공 서비스',
    image: '/images/project/earthus-thumbnail.png',
    tag: ['All', 'Project'],
    gitUrl: 'https://github.com/Team-1-Final-Project/EarthUs',
    previewUrl: null,
  },
  {
    id: 7,
    title: '점심 뭐 먹지',
    description: '우아한테크코스 점심 뭐 먹지 미션',
    image: '/images/project/lunch-thumbnail.png',
    tag: ['All', 'Mission'],
    gitUrl: 'https://github.com/shackstack/react-lunch/tree/step2',
    previewUrl: 'https://shackstack.github.io/react-lunch/',
  },
  {
    id: 8,
    title: 'MovieList',
    description: '우아한테크코스 무비리스트 미션',
    image: '/images/project/movie-list-thumbnail.png',
    tag: ['All', 'Mission'],
    gitUrl: 'https://github.com/shackstack/javascript-movie-review/tree-step2',
    previewUrl: 'https://shackstack.github.io/javascript-movie-review/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects' className='pt-24 min-h-screen'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Project'
          isSelected={tag === 'Project'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mission'
          isSelected={tag === 'Mission'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-4 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.15 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
