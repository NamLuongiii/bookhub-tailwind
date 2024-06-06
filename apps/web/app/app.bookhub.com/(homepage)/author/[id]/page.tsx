import { createRandomAuthor } from "@/lib";
import { MaxWidth } from "@/ui";
import * as React from "react";

interface IAuthorPageProps {}

export default function AuthorPage(props: IAuthorPageProps) {
  const author = createRandomAuthor();

  return (
    <MaxWidth>
      <div className="space-y-2">
        <img
          className="inline-block w-24 h-24 rounded-sm border"
          src={author.avatar}
        />
        <p className="max-w-full text-wrap whitespace-normal overflow-hidden text-ellipsis line-clamp-3">
          {author.name}
        </p>
      </div>
    </MaxWidth>
  );
}
