'use client';

import { posts } from '@/@data/posts';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';

type Props = {
  params: { id: string };
};

const PostPage = ({ params: { id } }: Props) => {
  const post = posts.find((post) => post.id === Number(id));
  const WebpackMD = dynamic(
    () => import(`../../../@data/posts/${id}/index.mdx`)
  );

  return (
    <>
      <Navbar />
      <div className='h-12' />
      <article className='p-3 text-xl dark:bg-[#121212]'>
        <div className='flex flex-col items-center'>
          <div className='w-[65rem] max-w-full flex flex-col pt-[3rem] gap-y-4 mb-16'>
            <h1 className='text-6xl font-medium break-keep tracking-tighter leading-tight md:leading-none md:text-start text-center'>
              {post?.title}
            </h1>
            <span className='font-bold text-zinc-400 text-end text-lg'>
              {post?.date}
            </span>
          </div>
          <div className='w-[75rem] max-w-full overflow-hidden border border-gray-500 rounded-xl mb-16' />
          <div className='w-[65rem] max-w-full md:max-w-[60%] prose dark:prose-invert'>
            <WebpackMD />
          </div>
        </div>
      </article>
    </>
  );
};

export default PostPage;
