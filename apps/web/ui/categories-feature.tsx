import { createMultiCategories } from "@/lib";
import { PaperClip } from "@repo/ui";
import Link from "next/link";
import { useMemo } from "react";
import { Feature } from "./feature";

export interface ICategoriesFeatureProps {}

export function CategoriesFeature(props: ICategoriesFeatureProps) {
  const categories = useMemo(() => createMultiCategories(20), [props]);

  return (
    <Feature id="categories" title="Tất cả danh mục">
      <div className="max-w-[700px] rounded-sm flex flex-wrap gap-1">
        {categories.map((item) => (
          <Link key={item.id} href={"/list?category=" + item.id}>
            <div className="text-sm bg-yellow-600 text-white border px-2 flex items-center justify-start gap-1 hover:bg-yellow-700">
              <PaperClip className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </Feature>
  );
}
