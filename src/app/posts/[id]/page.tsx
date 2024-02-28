"use client";

import { posts } from "@/@data/posts";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

type Props = {
  params: { id: string };
};

const PostPage = ({ params: { id } }: Props) => {
  const post = posts.find((post) => post.id === Number(id));
  const WebpackMD = dynamic(
    () => import(`../../../@data/posts/${id}/index.mdx`),
  );

  return (
    <>
      <Navbar />
      <div className="h-12" />
      <article className="p-3 text-xl dark:bg-[#121212]">
        <div className="flex flex-col items-center">
          <div className="mb-16 flex w-[65rem] max-w-full flex-col gap-y-4 pt-[3rem]">
            <h1 className="break-keep text-center text-6xl font-medium leading-tight tracking-tighter dark:text-white md:text-start">
              {post?.title}
            </h1>
            <span className="text-end text-lg font-bold text-zinc-400">
              {post?.date}
            </span>
          </div>
          <div className="mb-16 w-[75rem] max-w-full overflow-hidden rounded-xl border border-gray-500" />
          <div className="prose w-[65rem] max-w-full dark:prose-invert md:max-w-[60%]">
            <WebpackMD />
          </div>
          <div className="h-24" />
        </div>
      </article>
    </>
  );
};

export default PostPage;
