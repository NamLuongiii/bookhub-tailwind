import * as React from "react";
import { Feature } from "./feature";
import { Chunk } from "../lib/utils";
import { CATEGORY_LINKS } from "../lib/ constants";
import Link from "next/link";

export interface ICategoriesFeatureProps {}

export function CategoriesFeature(props: ICategoriesFeatureProps) {
  const chunks = Chunk(CATEGORY_LINKS);
  return (
    <Feature title="Tất cả danh mục">
      <table> 
        <tbody>
          {chunks.map((row, index) => (
            <tr key={index}>
              {row.map(category => {
                return (
                    <td key={category.name}><Link href={category.href}>{category.name}</Link></td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Feature>
  );
}
