import { createMultiRandomBook } from "@/lib";
import { MaxWidth } from "@/ui";
import { Book } from "@/ui/book";
import * as React from "react";

export interface IListPageProps {}

export default function ListPage(props: IListPageProps) {
  const books = React.useMemo(() => createMultiRandomBook(20), [props]);

  return (
    <MaxWidth>
      <div className="flex flex-wrap gap-[16px] *:basis-[calc(50%-8px)] *:lg:basis-40">
        {books.map((book) => (
          <Book
            key={book.id}
            name={book.name}
            cover={book.cover}
            href={"/book/" + book.id}
          />
        ))}
      </div>
    </MaxWidth>
  );
}
