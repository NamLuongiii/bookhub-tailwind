import * as TooltipInternal from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface ITooltip {
  label: string;
  children: ReactNode;
}

export function Tooltip({ label, children }: ITooltip) {
  return (
    <TooltipInternal.Provider>
      <TooltipInternal.Root>
        <TooltipInternal.Trigger>{children}</TooltipInternal.Trigger>
        <TooltipInternal.Portal>
          <TooltipInternal.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
            data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 
            select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
            sideOffset={5}
          >
            {label}
            <TooltipInternal.Arrow className="fill-white" />
          </TooltipInternal.Content>
        </TooltipInternal.Portal>
      </TooltipInternal.Root>
    </TooltipInternal.Provider>
  );
}
