import { clsx } from "@repo/ui";
import Epub, { Book, Location } from "epubjs";
import Navigation, { NavItem } from "epubjs/types/navigation";
import { createContext, useEffect, useRef, useState } from "react";
import { EpubNavigation, IBook } from "./epub-navigation";
import { EpubHeader } from "./header";
import { EpubSetting, ISetting } from "./setting";

export interface IEpubViewProps {
  bookInfo: IBook;
  goHome: () => void;
  goBack: () => void;
}

export const settingContex = createContext<{
  settingOpen: boolean;
  setSettingOpen: (open: boolean) => void;
  setting: ISetting;
  setSetting: (setting: ISetting) => void;
  openNavigation: boolean;
  setOpenNavigation: (open: boolean) => void;
  readNext: () => void;
  readPrev: () => void;
  goHome: () => void;
  goBack: () => void;
}>({
  settingOpen: false,
  setSettingOpen: (open: boolean) => {},
  setting: { fontSize: 16, flow: "paginated" },
  setSetting: (setting: ISetting) => {},
  openNavigation: true,
  setOpenNavigation: (open: boolean) => {},
  readNext: () => {},
  readPrev: () => {},
  goHome: () => {},
  goBack: () => {},
});

export function EpubView({ goHome, goBack, bookInfo }: IEpubViewProps) {
  const book = useRef<Book>();
  const element = useRef(null);
  const BOOK_URL = "https://react-reader.metabits.no/files/alice.epub";

  const [setting, setSetting] = useState<ISetting>({
    fontSize: 16,
    flow: "paginated",
  });
  const [settingOpen, setSettingOpen] = useState(false);

  const [openNavigation, setOpenNavigation] = useState(true);

  const [toc, setToc] = useState<NavItem[]>([]);
  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    init();
    initEpubEvent();
  }, []);

  useEffect(() => {
    if (book.current) {
      const rendition = book.current.rendition;
      rendition.themes.fontSize(`${setting.fontSize}px`);
      rendition.flow(setting.flow);
    }
  }, [setting]);

  useEffect(() => {
    if (book.current) {
      init();
    }
  }, [openNavigation]);

  const init = () => {
    if (book.current) {
      book.current.destroy();
      book.current = undefined;
    }

    if (!element.current) return;

    book.current = Epub(BOOK_URL);
    const epub = book.current;

    epub.loaded.navigation.then(({ toc }: Navigation) => {
      setToc(toc);
    });

    const rendition = epub.renderTo(element.current, {
      flow: setting.flow,
      allowScriptedContent: true,
      width: "100%",
      height: "100%",
    });

    rendition.on("keyup", handleKeyUp);
    rendition.on("locationChanged", (location: Location) => {
      setLocation(location);
    });

    rendition.themes.fontSize(`${setting.fontSize}px`);
    if (location) rendition.display(String(location.end));
    else rendition.display();

    return book.current;
  };

  const initEpubEvent = () => {
    document.addEventListener("keyup", handleKeyUp, false);
  };

  const readNext = () => {
    if (book.current) {
      const rendition = book.current.rendition;
      rendition.next();
    }
  };

  const readPrev = () => {
    if (book.current) {
      const rendition = book.current.rendition;
      rendition.prev();
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (book.current) {
      const rendition = book.current.rendition;
      if ((e.keyCode || e.which) == 37) {
        rendition.prev();
      }
      if ((e.keyCode || e.which) == 39) {
        rendition.next();
      }
    }
  };

  const handleNavigate = (href: string) => {
    if (book.current) {
      const rendition = book.current.rendition;
      rendition.display(href);
    }
  };

  return (
    <settingContex.Provider
      value={{
        settingOpen,
        setSettingOpen,
        setting,
        setSetting,
        openNavigation,
        setOpenNavigation,
        readNext,
        readPrev,
        goHome,
        goBack,
      }}
    >
      <div>
        <EpubHeader />
        <div className="flex">
          <EpubNavigation
            toc={toc}
            onNavigate={handleNavigate}
            book={bookInfo}
          />
          <div className="w-full min-h-[calc(100vh-51px)] overflow-hidden">
            <div
              id="viewer"
              className={clsx(
                "h-full",
                setting.flow != "paginated" && "scrolled"
              )}
              ref={element}
            ></div>
          </div>
        </div>

        <EpubSetting
          open={settingOpen}
          setOpen={setSettingOpen}
          setting={setting}
          onSettingChange={(setting) => {
            setSetting(setting);
            setSettingOpen(false);
          }}
        />
      </div>
    </settingContex.Provider>
  );
}
