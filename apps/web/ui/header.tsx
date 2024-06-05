import Link from "next/link";
import { MaxWidth } from "./max-width";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <MaxWidth className="py-2 sticky top-0 border-b flex justify-between items-center bg-white">
      <div className="inline-block w-6 aspect-video">Logo</div>
      <ul className="flex items-center space-x-4">
        <li>Home</li>
        <li>
          <Link href="/#categories">Danh mục sách</Link>
        </li>
      </ul>
    </MaxWidth>
  );
}
