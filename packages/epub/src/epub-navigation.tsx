import { BirdIcon, ElipsisHorizontal } from "@repo/ui";
import { NavItem } from "epubjs";
import { useState } from "react";
import { createPortal } from "react-dom";

export interface IBook {
  id: number
  name: string 
  pages: number
  chapters: number
  review: string
}

export interface INavigationProps {
  toc: NavItem[];
  onLeave: () => void;
  onNavigate: (href: string) => void;
  book: IBook
}

export function EpubNavigation({ toc, onLeave, onNavigate, book }: INavigationProps) {
  const [chapter, setChapter] = useState<string>();
  const [open, setOpen] = useState(true);

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
      className="bg-slate-50 w-[300px] shrink-0 h-screen overflow-auto border sticky top-0 hidden aria-expanded:block space-y-4"
      aria-expanded={open}
    >
      <header className="p-4 text-center">
        <div onClick={onLeave}>Logo</div>
      </header>
      <div>{renderNavItems(toc)}</div>

      <div className="m-4 border space-y-2 text-sm">
        <h2 className=" italic">Thông tin sách</h2>
        <div>{book.name}</div>
        <div className="flex items-center space-x-2">
          <div>{book.chapters} chương</div>
          <span>|</span>
          <div>{book.pages} trang</div>
        </div>
        <div className="text-wrap whitespace-normal text-ellipsis overflow-hidden line-clamp-3">{book.review}</div>
        <a href={'/book/' + book.id} className="text-blue-500 underline text-sm">Chi tiết</a>
      </div>

      <div className="mt-4 text-center bg-gray-100 sticky bottom-0 flex items-center *:py-2 *:basis-1/2 *:h-full *:flex *:justify-center *:items-center *:cursor-pointer">
        <div
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => setOpen(false)}
        >
          Ẩn
        </div>
        <div className="hover:bg-gray-200">Cài đặt</div>
      </div>
      {createPortal(
        <div
          className="fixed top-4 left-4 p-2 bg-gray-100/50 rounded-sm cursor-pointer active:bg-gray-200 aria-expanded:invisible visible z-50"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <BirdIcon className="w-8 h-8" />
        </div>,
        document.body
      )}
    </div>
  );
}
