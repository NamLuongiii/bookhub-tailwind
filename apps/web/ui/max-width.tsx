import clsx from "clsx";
import * as React from "react";

export function MaxWidth({
  className,
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("max-w-5xl mx-auto px-4 lg:px-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}
