import { posts } from '@/@data/posts';
import { Post } from '@/@types';
import Navbar from '@/components/Navbar';
import { PostPreviewList } from '@/components/Post/PostPreviewList';

export const metadata = {
  title: `Posts`,
};

const Posts = () => {
  return (
    <main className='min-h-screen p-12 dark:bg-[#121212]'>
      <Navbar />
      <div className='h-12'></div>
      <h1 className='text-4xl font-semibold text-center dark:text-white'>
        All Posts
      </h1>
      <PostPreviewList posts={posts} />
    </main>
  );
};

export default Posts;
