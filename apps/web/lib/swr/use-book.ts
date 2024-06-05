import { useParams } from "next/navigation";
import useSWR from "swr";
import { createRandomBook } from "../dumb";

export function useBook() {
  const { slug } = useParams();

  const { data, error, isLoading, isValidating } = useSWR(
    `/api/books/${slug}`,
    async () => {
      return createRandomBook();
    }
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
  };
}
