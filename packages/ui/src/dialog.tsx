import * as DialogInternal from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { X } from "./icons";

interface IDialog {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Dialog({
  open,
  title,
  description,
  children,
  onOpenChange,
}: IDialog) {
  return (
    <DialogInternal.Root open={open} onOpenChange={onOpenChange}>
      <DialogInternal.Portal>
        <DialogInternal.Overlay className="bg-slate-200/40 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <DialogInternal.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-50">
          <DialogInternal.Title className="text-mauve12 m-0 text-[17px] font-medium">
            {title}
          </DialogInternal.Title>
          {!!description && (
            <DialogInternal.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              {description}
            </DialogInternal.Description>
          )}
          {children}
          <DialogInternal.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </DialogInternal.Close>
        </DialogInternal.Content>
      </DialogInternal.Portal>
    </DialogInternal.Root>
  );
}
