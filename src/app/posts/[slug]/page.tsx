import WebpackMD from '@/@data/post/1.mdx';

type Props = {
  params: { slug: string };
};

export const metadata = {
  title: `Post`,
};

const PostPage = ({ params: { slug } }: Props) => {
  //   const source = await getPostSourceBySlug(slug);
  const post = {
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

  return (
    <article className='p-3 text-xl'>
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
        <div className='w-[65rem] max-w-full md:max-w-[60%]'>
          <WebpackMD />
        </div>
      </div>
    </article>
  );
};

export default PostPage;
