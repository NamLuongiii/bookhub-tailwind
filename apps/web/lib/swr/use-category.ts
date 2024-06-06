import useSWR from "swr";
import { fetcher } from "../axios";

export function useCategories() {
  const value = useSWR("/api/categories", fetcher);

  return value;
}
