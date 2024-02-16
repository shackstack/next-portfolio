import { Post } from '@/@types';

export const posts: Post[] = [
  {
    id: 1,
    title: '웹팩(webpack)으로 개발 환경 설정하기',
    date: '2023-07-28',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/ko/8/81/Spongebob_4795.jpg',
    excerpt:
      'CRA같은 보일러플레이트로부터 벗어나 webpack 설정을 통해 직접 개발환경을 세팅해봅시다.',
    ogImage: {
      url: 'https://example.com/path/to/og/image.jpg',
    },
    tags: ['webpack', 'SPA'],
  },
  {
    id: 2,
    title: 'SPA 프로젝트에 오픈그래프 기능 구현하기',
    date: '2023-12-24',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/ko/8/81/Spongebob_4795.jpg',
    excerpt:
      'Next.js를 부분적으로 도입하여 오픈그래프 기능을 구현한 과정을 공유합니다.',
    ogImage: {
      url: 'https://example.com/path/to/og/image.jpg',
    },
    tags: ['Next.js', 'SPA'],
  },
  {
    id: 3,
    title: 'AWS accessKey 접근 권한이 없는 환경에서 S3 자동배포 구현하기',
    date: '2024-01-24',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/ko/8/81/Spongebob_4795.jpg',
    excerpt:
      'EC2를 활용하여 S3 자동배포 파이프라인 구축하는 방법을 공유합니다.',
    ogImage: {
      url: 'https://example.com/path/to/og/image.jpg',
    },
    tags: ['S3', 'CI/CD'],
  },
];
