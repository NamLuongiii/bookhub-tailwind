import Link from "next/link";

export interface IBookProps {
  cover: string;
  name: string;
  href: string;
}

export function Book({ cover, name, href }: IBookProps) {
  return (
    <Link className="block w-full" href={href}>
      <div className="space-y-2">
        <div
          className="border rounded-sm bg-cover aspect-[1/1.4]"
          style={{
            backgroundImage: "url(" + cover + ")",
          }}
        ></div>
        <p className="text-wrap whitespace-normal line-clamp-2">{name}</p>
      </div>
    </Link>
  );
}
