import WebpackMD from '@/@data/post/1.mdx';
import Navbar from '@/components/Navbar';

type Props = {
  params: { id: string };
};

export const metadata = {
  title: `Post`,
};

const PostPage = ({ params: { id } }: Props) => {
  // const source = await getPostSourceById(id);

  return (
    <>
      <Navbar />
      <div className='h-12' />
      <article className='p-3 text-xl bg-[#171717]'>
        <div className='flex flex-col items-center'>
          <div className='w-[65rem] max-w-full flex flex-col pt-[3rem] gap-y-4 mb-16'>
            <h1 className='text-6xl font-medium break-keep tracking-tighter leading-tight md:leading-none md:text-start text-center'>
              {post.title}
            </h1>
            <span className='font-bold text-zinc-400 md:text-start text-center text-lg'>
              {/* <DateFormatter dateString={post.date} /> */}
            </span>
          </div>
          <div className='w-[75rem] max-w-full overflow-hidden border border-gray-500 rounded-xl mb-16'>
            {/* <CoverImage title={post.title} src={post.coverImage} /> */}
          </div>
          {/* <Toc /> */}
          <div className='w-[65rem] max-w-full md:max-w-[60%] prose dark:prose-invert'>
            <WebpackMD />
          </div>
        </div>
      </article>
    </>
  );
};

export default PostPage;
