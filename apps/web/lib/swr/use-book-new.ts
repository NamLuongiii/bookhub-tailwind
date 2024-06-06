import useSWR from "swr";
import { fetcher } from "../axios";

export function useBookNew() {
  const value = useSWR("/api/book-new", fetcher);
  return value;
}
