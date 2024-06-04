import Link from "next/link";
import { CATEGORY_LINKS } from "../lib/ constants";
import { MaxWidth } from "./max-width";
import { Badge } from "./shared/badge";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer>
      <MaxWidth className="border-t py-8">
        <section>
          <label>Danh mục sách</label>
          {CATEGORY_LINKS.map((item) => (
            <Link key={item.name} href={item.href} className="mr-2">
              <Badge variant="outline">{item.name}</Badge>
            </Link>
          ))}
        </section>
      </MaxWidth>
    </footer>
  );
}
