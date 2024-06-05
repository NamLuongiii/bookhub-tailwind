import clsx from "clsx";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";

export interface IBookProps {
  cover: string;
  name: string;
  href: string;
}

export function Book({
  cover,
  name,
  href,
  className,
  ...props
}: IBookProps & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <Link className="block w-full shrink-0" href={href}>
      <div className={clsx(className, "space-y-2")} {...props}>
        <div
          className="border rounded-sm bg-cover aspect-[1/1.4]"
          style={{
            backgroundImage: "url(" + cover + ")",
          }}
        ></div>
        <p className="text-wrap whitespace-normal line-clamp-3">{name}</p>
      </div>
    </Link>
  );
}
