import { URL } from "../../utils/routeConstants";

export const sendRequest = async (method: string, path: string, data: any) => {
  const auth = localStorage.getItem("auth");

  const postMethod = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  };
  const getMethod = {
    method: method,
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
  const putMethod = {};

  const deleteMethod = {};

  let result = fetch(
    URL.concat(path),
    method === "POST"
      ? postMethod
      : method === "GET"
      ? getMethod
      : method === "PUT"
      ? putMethod
      : deleteMethod
  );

  result = (await result).json();
  return result;
};
