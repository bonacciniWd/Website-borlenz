import React from "react";
import { TbBooks } from "react-icons/tb";

const MagicButton = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block w-full md:w-60 mt-4"
      >
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex text-base h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 font-medium text-white backdrop-blur-3xl">
            <TbBooks className="mr-4 text-brandWhite hover:text-brandOrange" /> {title}
          </span>
        </button>
      </a>
    </div>
  );
  
};

export default MagicButton;
