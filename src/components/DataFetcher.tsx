import type { ReactElement } from "react";

interface DataFetcherProps<T> {
  url: string;
  render: (
    data: T | null,
    isLoading: boolean,
    error: string | null
  ) => ReactElement;
}

function DataFetcher<T>({ url, render }: DataFetcherProps<T>) {
  return <div>DataFetcher</div>;
}

export default DataFetcher;
