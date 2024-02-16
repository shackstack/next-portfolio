import { Post } from '@/@types';
import Navbar from '@/components/Navbar';
import { PostPreviewList } from '@/components/Post/PostPreviewList';

export const metadata = {
  title: `Posts`,
};

const postExample: Post = {
  slug: 'example-post',
  title: '웹팩(webpack)으로 개발 환경 설정하기',
  date: '2024-02-15',
  coverImage:
    'https://upload.wikimedia.org/wikipedia/ko/8/81/Spongebob_4795.jpg',
  excerpt:
    'CRA같은 보일러플레이트로부터 벗어나 webpack 설정을 통해 직접 개발환경을 세팅해봅시다.',
  ogImage: {
    url: 'https://example.com/path/to/og/image.jpg',
  },
  tags: ['webpack', 'SPA'],
};

const Posts = () => {
  return (
    <main className='bg-[#121212] min-h-screen p-12'>
      <Navbar />
      <div className='h-12'></div>
      <h1 className='text-4xl font-semibold text-center'>All Posts</h1>
      <PostPreviewList posts={[postExample]} />
    </main>
  );
};

export default Posts;
