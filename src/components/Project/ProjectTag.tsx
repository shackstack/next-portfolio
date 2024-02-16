import React from 'react';

interface ProjectTagProps {
  name: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? 'border-primary-500'
    : 'dark:text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
