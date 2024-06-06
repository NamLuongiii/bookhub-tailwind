"use client";

import {
  createMultiCategories,
  createMultiRandomAuthors,
  useBook,
} from "@/lib";
import { AppLink, BookLoading, MaxWidth } from "@/ui";
import { Book } from "@/ui/book";
import { Button } from "@repo/ui";
import { useMemo } from "react";

export interface IBookPageProps {}

export default function BookPage(props: IBookPageProps) {
  const authors = useMemo(() => createMultiRandomAuthors(2), [props]);
  const categories = useMemo(() => createMultiCategories(7), [props]);

  const { data: book, isLoading, error } = useBook();

  if (error) throw error;

  if (isLoading || !book) return <BookLoading />;

  return (
    <MaxWidth className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[240px] shrink-0">
          <Book cover={book.cover} name={book.name} href="#" />
        </div>
        <div className="space-y-2">
          <div>
            <p className="italic">Viết bởi</p>
            <div className="space-x-2">
              {authors.map((author) => (
                <AppLink key={author.id} href={"/author/" + author.id}>
                  {author.name}
                </AppLink>
              ))}
            </div>
          </div>

          <div className="space-x-2">
            <span className="italic">Tên gốc</span>
            <span>{book.originName}</span>
          </div>

          <div className="space-x-2">
            <span className="italic">Số trang</span>
            <span>{book.length}</span>
          </div>
          <div className="space-x-2">
            <span className="italic">Số chương</span>
            <span>{book.chapters}</span>
          </div>
          <div>
            <p className="italic">Danh mục sách</p>
            <div className="space-x-2">
              {categories.map((category) => (
                <AppLink
                  key={category.id}
                  href={"/list?category=" + category.id}
                >
                  {category.name}
                </AppLink>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="text-center">
        <AppLink href={"/read/" + book.id}>
          <Button size="lg">Đọc online</Button>
        </AppLink>
      </div>

      <div className="space-y-2">
        <p>Lời giới thiệu</p>
        <div>{book.review}</div>
      </div>
    </MaxWidth>
  );
}
