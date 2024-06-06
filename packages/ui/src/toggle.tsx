import { HtmlHTMLAttributes } from "react";

export function Toggle(props: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="hover:bg-[#f4f0fe] text-[#65636d] data-[state=on]:bg-[#d4cafe] data-[state=on]:text-[#2f265f] shadow-md flex h-[35px] w-[35px] items-center justify-center 
    rounded bg-white text-base leading-4 outline-none"
    ></div>
  );
}
