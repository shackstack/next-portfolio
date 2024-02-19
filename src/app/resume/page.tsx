import Navbar from "@/components/Navbar";
import File from "./File.mdx";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="h-12" />
      <div className="flex flex-col items-center  dark:bg-[#121212]">
        <article className="prose prose-lg max-w-full dark:prose-invert">
          <File />
        </article>
      </div>
    </>
  );
};

export default Resume;
