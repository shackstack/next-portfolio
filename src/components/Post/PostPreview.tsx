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
      className='h-[32rem] border-4 items-center justify-betweentext-center border-gray-500 text-xl flex flex-col gap-y-5'>
      <div className='flex h-0 grow-[3] items-center relative w-full'>
        <Image
          src={`/images/posts/${id}/thumbnail.webp`}
          alt='cover'
          fill
          className='object-cover'
        />
      </div>
      {/* <hr className='w-10 border-gray-500' /> */}
      <div className='flex flex-col gap-y-2 items-center h-0 grow-[2] relative'>
        <span className='text-xl w-[80%] dark:text-white'>{title}</span>
        <p className='text-sm dark:text-gray-300 px-10'>{excerpt}</p>
        <p className='absolute right-4 bottom-0'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='border border-gray-500 rounded-full h-10 shrink-0 px-2 text-sm dark:text-white'>
              #{tag.toUpperCase()}
            </span>
          ))}
        </p>
      </div>
      <span className='text-sm'>
        {/* <DateFormatter dateString={date} /> */}
      </span>
    </Link>
  );
};
