import {
  ArrowBigLeft,
  CircleHelp,
  Home,
  PanelsTopLeft,
  Settings2,
  Toggle,
  Tooltip,
} from "@repo/ui";
import { useContext } from "react";
import { ArrowLeft, ArrowRight } from "../../ui/src/icons";
import { settingContex } from "./epup-view";
export interface IEpubHeaderProps {}

export function EpubHeader(props: IEpubHeaderProps) {
  const {
    goBack,
    goHome,
    openNavigation,
    setOpenNavigation,
    readNext,
    readPrev,
    settingOpen,
    setSettingOpen,
  } = useContext(settingContex);

  return (
    <header className="px-4 py-2 *:space-x-2 sticky top-0 bg-white z-20 flex justify-between shrink-0 border-b">
      <div className="flex space-x-2">
        <Tooltip label="Quay lại">
          <Toggle onClick={goBack}>
            <ArrowBigLeft />
          </Toggle>
        </Tooltip>

        <Tooltip label="Về  trang chủ">
          <Toggle onClick={goHome}>
            <Home />
          </Toggle>
        </Tooltip>

        <Tooltip label="Mục lục">
          <Toggle onClick={() => setOpenNavigation(!openNavigation)}>
            <PanelsTopLeft />
          </Toggle>
        </Tooltip>

        <Tooltip label="Phím tắt">
          <Toggle>
            <CircleHelp />
          </Toggle>
        </Tooltip>

        <Tooltip label="Thiết lập">
          <Toggle onClick={() => setSettingOpen(!settingOpen)}>
            <Settings2 />
          </Toggle>
        </Tooltip>
      </div>

      <div className="flex space-x-2 justify-end">
        <Tooltip label="Trang trước">
          <Toggle onClick={readPrev}>
            <ArrowLeft className="w-4 h-4" />
          </Toggle>
        </Tooltip>

        <Tooltip label="Sang trang">
          <Toggle onClick={readNext}>
            <ArrowRight className="w-4 h-4" />
          </Toggle>
        </Tooltip>
      </div>
    </header>
  );
}
