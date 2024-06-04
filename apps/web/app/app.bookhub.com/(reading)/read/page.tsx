"use client";

import { EpubView } from "@repo/epub";
import { useRouter } from "next/navigation";

export interface IReadingPageProps {}

export default function ReadingPage(props: IReadingPageProps) {
  const router = useRouter();

  return (
    <div>
      <EpubView onLeave={() => router.push("/")} />
    </div>
  );
}
