import clsx from "clsx";
import Link from "next/link";
import * as React from "react";

export interface IAppLinkProps {}

export function AppLink({
  className,
  children,
  href,
  ...props
}: React.HtmlHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      className={clsx(className, "underline text-blue-500")}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
