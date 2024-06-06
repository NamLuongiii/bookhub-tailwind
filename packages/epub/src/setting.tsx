import { Button, Dialog } from "@repo/ui";
import { useState } from "react";

export interface ISetting {
  fontSize: number;
  flow: "paginated" | "scrolled-doc" | "scrolled";
}

export interface IEpubSettingProps {
  setting: ISetting;
  onSettingChange: (setting: ISetting) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function EpubSetting({
  setting,
  onSettingChange,
  open,
  setOpen,
}: IEpubSettingProps) {
  const [internalSetting, setInteralSetting] = useState<ISetting>({
    ...setting,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen} title="Thiết lập trình đọc">
      <div className="space-y-4">
        <fieldset>
          <label>Cỡ chữ</label>
          <div
            className="flex flex-wrap gap-2 *:w-[42px] *:h-[42px] *:bg-white *:text-[#333] hover:*:text-[#222]
            aria-checked:*:bg-blue-200 aria-checked:*:text-white *:rounded-full aria-checked:hover:*:bg-blue-300 *:flex *:justify-center *:items-center 
            *:select-none *:cursor-pointer"
          >
            <div
              className="text-[14px]"
              onClick={() => {
                setInteralSetting({ ...internalSetting, fontSize: 14 });
              }}
              aria-checked={internalSetting.fontSize == 14}
            >
              <span>Aa</span>
            </div>

            <div
              className="text-[16px]"
              onClick={() => {
                setInteralSetting({ ...internalSetting, fontSize: 16 });
              }}
              aria-checked={internalSetting.fontSize == 16}
            >
              <span>Aa</span>
            </div>

            <div
              className="text-[20px]"
              onClick={() => {
                setInteralSetting({ ...internalSetting, fontSize: 20 });
              }}
              aria-checked={internalSetting.fontSize == 20}
            >
              <span>Aa</span>
            </div>

            <div
              className="text-[24px]"
              onClick={() => {
                setInteralSetting({ ...internalSetting, fontSize: 24 });
              }}
              aria-checked={internalSetting.fontSize == 24}
            >
              <span>Aa</span>
            </div>

            <div
              className="text-[28px]"
              onClick={() => {
                setInteralSetting({ ...internalSetting, fontSize: 28 });
              }}
              aria-checked={internalSetting.fontSize == 28}
            >
              <span>Aa</span>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <label>Luồng đọc</label>
          <div className="space-x-2 *:border *:p-2 *:bg-slate-50 hover:*:bg-slate-100 aria-selected:*:bg-blue-400 aria-selected:*:text-white hover:aria-selected:bg-blue-500">
            <button
              type="button"
              aria-selected={internalSetting.flow == "paginated"}
              onClick={() =>
                setInteralSetting({ ...internalSetting, flow: "paginated" })
              }
            >
              Phân trang
            </button>
            <button
              type="button"
              aria-selected={internalSetting.flow == "scrolled-doc"}
              onClick={() =>
                setInteralSetting({ ...internalSetting, flow: "scrolled-doc" })
              }
            >
              Cuộn
            </button>
          </div>
        </fieldset>

        <div className="space-x-2 text-end">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Hủy bỏ
          </Button>
          <Button onClick={() => onSettingChange(internalSetting)}>
            Lưu thiết lập
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
