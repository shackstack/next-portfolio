"use client";

import { useMemo, useState } from "react";
// import { flat, map, toArray, uniq } from "@fxts/core";
import { Post } from "@/@types";
import { PostPreview } from "./PostPreview";

interface Props {
  posts: Post[];
}

export const PostPreviewList = ({ posts }: Props) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  //   const tags = useMemo<string[]>(
  //     () => toArray(uniq(flat(map(({ tags }) => tags, posts)))) ?? [],
  //     [posts],
  //   );

  const filteredPosts = useMemo<Post[]>(
    () =>
      selectedTag
        ? posts.filter(({ tags }) => tags.includes(selectedTag))
        : posts,
    [posts, selectedTag],
  );

  const handleSelectTag = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  return (
    <div className="flex h-full w-full flex-col py-10">
      <div className="grid w-full grid-cols-1 gap-4 pb-10 md:grid-cols-2 lg:grid-cols-4">
        {/* <div className="lg:h-[20rem] rounded text-xl">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="font-light gap-x-3 flex"
              onClick={() => handleSelectTag(tag)}
            >
              <span className="whitespace-pre">
                {`(${selectedTag === tag ? "  O  " : "       "})`}
              </span>
              <span>{tag}</span>
            </button>
          ))}
        </div> */}
        {filteredPosts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
