import { NavItem } from "epubjs";
import { useState } from "react";

export interface INavigationProps {
  toc: NavItem[];
  onLeave: () => void;
  onNavigate: (href: string) => void;
}

export function EpubNavigation({ toc, onLeave, onNavigate }: INavigationProps) {
  const [chapter, setChapter] = useState<string>();

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
    <div className="bg-slate-50 w-[300px] shrink-0 h-screen overflow-auto border sticky top-0 pb-6">
      <header className="p-4 text-center">
        <div onClick={onLeave}>Logo</div>
      </header>
      <div>{renderNavItems(toc)}</div>
    </div>
  );
}
