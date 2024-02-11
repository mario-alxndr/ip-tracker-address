'use client';

import { useEffect, useCallback, useRef, useState } from 'react';

// this useQuery temporary prepared only for initial fetch.
const useQuery: any = (key: string, url: string, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevUrlRef = useRef('');

  const memoizedFetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const jsonData = await response.json();

      // Validate and process data if needed
      setData(jsonData);
    } catch (error: any) {
      setError(error);
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [key]);

  useEffect(() => {
    if (url !== prevUrlRef.current) {
      memoizedFetchData();
      prevUrlRef.current = url;
    }
  }, [key]);

  return { data, isLoading, error };
}

export default useQuery;
