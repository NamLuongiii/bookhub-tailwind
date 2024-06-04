import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";
import * as React from "react";

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
