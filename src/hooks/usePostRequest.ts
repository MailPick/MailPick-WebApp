import { useMutation } from "@tanstack/react-query";

interface PostRequestParams<T> {
  endpoint: string;
  data: T;
}
const fetchData = async <T>({ endpoint, data }: PostRequestParams<T>) => {
  const response = await fetch(`http://localhost:3003${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if(response.ok)
    return response.json();
};
const usePostRequest = <T>() => {
  const mutation = useMutation({
    mutationFn: ({ endpoint, data }: PostRequestParams<T>) => fetchData({ endpoint, data }),
  });

  return mutation;
};

export default usePostRequest;