import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAccountStore } from "@/store/accountStore";

//id값 보내야 그 유저에대한 정보가져올수있음
const fetchAccountData = async (endpoint:string) => {
  const response = await fetch(`http://localhost:3002/${endpoint}`);
  if (!response.ok) {
    throw new Error("Failed to fetch account data");
  }
  return response.json();
}
const useAccountQuery = () => {
  const setAccount = useAccountStore((state) => state.setAccount);
  const query = useQuery({ //실제 사용시 useMutation으로 변경
    queryKey: ["accounts"],
    queryFn: () => fetchAccountData("accounts"),
  });
  useEffect (() => {
    if(query.data) {
      setAccount(query.data);
    }
  }, [query.data])
  return query;
}

export default useAccountQuery;