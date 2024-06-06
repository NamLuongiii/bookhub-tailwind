import { NavItem } from "epubjs";
import { useContext, useState } from "react";
import { settingContex } from "./epup-view";

export interface IBook {
  id: number;
  name: string;
  pages: number;
  chapters: number;
  review: string;
}

export interface INavigationProps {
  toc: NavItem[];
  onNavigate: (href: string) => void;
  book: IBook;
}

export function EpubNavigation({ toc, onNavigate, book }: INavigationProps) {
  const [chapter, setChapter] = useState<string>();
  const { openNavigation } = useContext(settingContex);

  const renderNavItems = (toc: NavItem[]) => {
    return (
      <div className="space-y-2 *:cursor-pointer">
        {toc.map((item, i) => (
          <div
            key={i}
            className="hover:bg-slate-200 px-4 aria-checked:bg-slate-200"
            aria-checked={item.href == chapter}
          >
            <p
              onClick={() => {
                onNavigate(item.href);
                setChapter(item.href);
              }}
            >
              {item.label}
            </p>
            <div className="pl-2">
              {!!item.subitems && renderNavItems(item.subitems)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="bg-slate-50 w-[300px] shrink-0 h-[calc(100vh-51px)] overflow-auto border sticky top-[51px] hidden aria-expanded:block space-y-4 py-4"
      aria-expanded={openNavigation}
    >
      <header className="text-center">
        <div>Mục lục</div>
      </header>
      <div className="text-[14px]">{renderNavItems(toc)}</div>

      <div className="m-4 border space-y-2 text-sm">
        <h2 className=" italic">Thông tin sách</h2>
        <div>{book.name}</div>
        <div className="flex items-center space-x-2">
          <div>{book.chapters} chương</div>
          <span>|</span>
          <div>{book.pages} trang</div>
        </div>
        <div className="text-wrap whitespace-normal text-ellipsis overflow-hidden line-clamp-3">
          {book.review}
        </div>
        <a
          href={"/book/" + book.id}
          className="text-blue-500 underline text-sm"
        >
          Chi tiết
        </a>
      </div>
    </div>
  );
}
