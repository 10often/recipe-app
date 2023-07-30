import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";

export const useFetch = () => {
  const request = async <P>(
    url: string,
    method = "GET",
    body: P,
    headers: any = {}
  ) => {
    try {
      let reqBody;
      if (body) {
        reqBody = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }

      const response = await fetch(url, { method, body: reqBody, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Что-то пошло не так");
      }

      return data;
    } catch (e: any) {
      console.log(e);
      throw e;
    }
  };

  const useRequest = <T, K = T>(
    key: string,
    url: string,
    config: UseQueryOptions<T, Error, K> = {},
    method = "GET",
    headers?: any
  ) =>
    useQuery({
      queryKey: key,
      queryFn: () => request(url, method, null, headers),
      ...config,
    });

  const useSend = <T, K = T>(
    url: string,
    config: UseMutationOptions<T, Error, K> = {},
    method = "POST",
    headers?: any
  ) =>
    useMutation({
      mutationFn: <P = void>(params: P) =>
        request(url, method, params, headers),
      ...config,
    });

  return { useRequest, useSend, request };
};
