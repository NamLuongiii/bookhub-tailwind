"use client";

import { BookNewFeature } from "@/ui/book-new-feature";
import { CategoriesFeature } from "@/ui/categories-feature";
import { MaxWidth } from "@/ui/max-width";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <MaxWidth>
      <BookNewFeature />
      <CategoriesFeature />
    </MaxWidth>
  );
}
