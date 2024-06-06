import { MaxWidth } from "../max-width";

export interface IListLoadingProps {}

export function ListLoading(props: IListLoadingProps) {
  return (
    <MaxWidth>
      <div className="flex flex-wrap gap-[16px]">
        {Array.from(Array(10).keys()).map((item) => (
          <ItemLoading key={item} />
        ))}
      </div>
    </MaxWidth>
  );
}

function ItemLoading() {
  return (
    <div className="basis-[calc(50%-8px)] lg:basis-40 aspect-[1/1.45] bg-slate-200 rounded-sm animate-pulse"></div>
  );
}
