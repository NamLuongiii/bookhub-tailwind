import Epub, { Book, Rendition } from "epubjs";
import Navigation, { NavItem } from "epubjs/types/navigation";
import { useEffect, useRef, useState } from "react";
import { EpubNavigation } from "./epub-navigation";

export interface IEpubViewProps {
  onLeave: () => void;
}

export function EpubView({ onLeave }: IEpubViewProps) {
  const book = useRef<Book>();
  const rendition = useRef<Rendition>();
  const element = useRef(null);
  const BOOK_URL = "https://react-reader.metabits.no/files/alice.epub";

  const [toc, setToc] = useState<NavItem[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (!book.current) {
      book.current = Epub(BOOK_URL);
      book.current.loaded.navigation.then(({ toc }: Navigation) => {
        setToc(toc);
      });
    }

    if (element.current && book.current && !rendition.current) {
      rendition.current = book.current.renderTo(element.current, {
        flow: "scrolled",
        width: "100%",
        height: "100%",
      });

      rendition.current.on("keyup", handleKeyUp);
      document.addEventListener("keyup", handleKeyUp, false);
      rendition.current.display();
    }
  };

  const handleNext = () => {
    if (rendition.current) rendition.current.next();
  };

  const handlePrev = () => {
    if (rendition.current) rendition.current.prev();
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (!rendition.current) return;

    if ((e.keyCode || e.which) == 37) {
      console.log(1);

      rendition.current.prev();
    }

    // Right Key
    if ((e.keyCode || e.which) == 39) {
      rendition.current.next();
    }
  };

  const handleNavigate = (href: string) => {
    if (!rendition.current) return;
    rendition.current.display(href);
  };

  return (
    <div className="epub-view">
      <EpubNavigation toc={toc} onLeave={onLeave} onNavigate={handleNavigate} />
      <div className="epub-view__view">
        <div ref={element}></div>
        <div className="epub-view__toolbar">
          <button onClick={handlePrev}>prev</button>|
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </div>
  );
}
