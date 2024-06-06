import useSWR from "swr";
import { fetcher } from "../axios";

export function useBooks() {
  const value = useSWR("/api/books", fetcher);
  return value;
}
