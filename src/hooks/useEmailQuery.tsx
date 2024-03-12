import { useQuery } from "@tanstack/react-query";

const fetchEmailData = async (endpoint:string) => {
  const response = await fetch(`http://localhost:3001/${endpoint}`);
  if (!response.ok) {
    throw new Error("Failed to fetch email data");
  }
  return response.json();
}

export const useEmailQuery = (key:string[], endpoint:string, options={}) => {
  const query =  useQuery({
      queryKey: key,
      queryFn: () => fetchEmailData(endpoint),
      staleTime: 1000 * 60 * 1, // 1 minutes,
      gcTime: 1000 * 60 * 10, // 10 minutes
      ...options
    })
    return query;
  };

