import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/@types';

interface Props {
  post: Post;
}

export const PostPreview = ({ post }: Props) => {
  const { id, title, excerpt, coverImage, tags, date } = post;

  return (
    <Link
      href={`/posts/${id}`}
      className='lg:h-[40rem] h-[36rem] break-keep border-4 items-center justify-between py-10 px-10 text-center border-gray-500 text-xl flex flex-col gap-y-5'>
      <hr className='w-10 border-gray-500' />
      <div className='flex flex-col gap-y-2 items-center h-0 grow'>
        <span className='text-2xl w-[80%] dark:text-white'>{title}</span>
        <p>
          {tags.map((tag) => (
            <span
              key={tag}
              className='border border-gray-500 rounded-full h-10 shrink-0 px-2 text-sm'>
              #{tag.toUpperCase()}
            </span>
          ))}
        </p>
        <p className='text-sm dark:text-gray-300'>{excerpt}</p>
        <div className='flex h-0 grow items-center'>
          <div className='w-full h-56 rounded-xl overflow-hidden border-gray-500 border'>
            <Image
              src={coverImage}
              width={5000}
              height={1000}
              alt='cover'
              className='h-full w-max'
            />
          </div>
        </div>
      </div>
      <span className='text-sm'>
        {/* <DateFormatter dateString={date} /> */}
      </span>
    </Link>
  );
};
