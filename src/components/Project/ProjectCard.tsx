import React from "react";
import Link from "next/link";
import BracketIcon from "@/assets/icons/bracket.svg";
import EyeIcon from "@/assets/icons/eye.svg";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string | null;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="group relative h-52 w-52 rounded-t-xl shadow-lg shadow-purple-800 md:h-72 md:w-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80 ">
          <Link
            href={gitUrl}
            target="_blank"
            className="group/link relative mr-2 h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <BracketIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer  text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              className="group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
            >
              <EyeIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer  text-[#ADB7BE] group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="bg-[#181818]py-6 mt-3 rounded-b-xl px-4 dark:text-white">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
