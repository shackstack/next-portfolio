import Link from "next/link";
import Image from "next/image";
import { Post } from "@/@types";

interface Props {
  post: Post;
}

export const PostPreview = ({ post }: Props) => {
  const { id, title, excerpt, coverImage, tags, date } = post;

  return (
    <Link
      href={`/posts/${id}`}
      className="justify-betweentext-center flex h-[32rem] flex-col items-center gap-y-5 border-4 border-gray-500 text-xl"
    >
      <div className="relative flex h-0 w-full grow-[3] items-center">
        <Image
          src={`/images/posts/${id}/thumbnail.webp`}
          alt="cover"
          fill
          className="object-cover"
        />
      </div>
      {/* <hr className='w-10 border-gray-500' /> */}
      <div className="relative flex h-0 grow-[2] flex-col items-center gap-y-2">
        <span className="w-[80%] text-xl dark:text-white">{title}</span>
        <p className="px-10 text-sm dark:text-gray-300">{excerpt}</p>
        <p className="absolute bottom-0 right-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="h-10 shrink-0 rounded-full border border-gray-500 px-2 text-sm dark:text-white"
            >
              #{tag.toUpperCase()}
            </span>
          ))}
        </p>
      </div>
      <span className="text-sm">
        {/* <DateFormatter dateString={date} /> */}
      </span>
    </Link>
  );
};
