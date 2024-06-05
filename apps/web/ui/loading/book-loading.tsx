import { MaxWidth } from "../max-width";

interface IBookLoadingProps {}

export function BookLoading(props: IBookLoadingProps) {
  return (
    <MaxWidth className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[240px] aspect-[1/1.45] animate-pulse rounded-sm bg-slate-200"></div>
        <div className="grow space-y-2 *:animate-pulse">
          <div className="h-2 bg-slate-200 rounded-sm"></div>
          <div className="h-2 bg-slate-200 rounded-sm"></div>
          <div className="h-2 bg-slate-200 rounded-sm"></div>
          <div className="h-2 bg-slate-200 rounded-sm"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-24 bg-slate-200 rounded-sm"></div>
        <div className="h-24 bg-slate-200 rounded-sm"></div>
        <div className="h-24 bg-slate-200 rounded-sm"></div>
      </div>
    </MaxWidth>
  );
}
