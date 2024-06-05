import { MaxWidth } from "./max-width";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer>
      <MaxWidth className="border-t py-2 space-y-2">
        <p>@Khám phá sự thú vị của những quyển sách</p>
      </MaxWidth>
    </footer>
  );
}
