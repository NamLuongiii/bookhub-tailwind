import Link from "next/link";
import { CATEGORY_LINKS } from "../lib/ constants";
import { Chunk } from "../lib/utils";
import { Feature } from "./feature";

export interface ICategoriesFeatureProps {}

export function CategoriesFeature(props: ICategoriesFeatureProps) {
  const chunks = Chunk(CATEGORY_LINKS);
  return (
    <Feature title="Tất cả danh mục">
      <table className="*:border">
        <tbody>
          {chunks.map((row, index) => (
            <tr key={index}>
              {row.map((category) => {
                return (
                  <td key={category.name} className="border">
                    <Link href={category.href}>{category.name}</Link>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Feature>
  );
}
