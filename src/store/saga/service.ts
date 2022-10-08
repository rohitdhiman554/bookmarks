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
  const putMethod = {
    method: method,

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  };

  const deleteMethod = {
    method: method,

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  };

  const patchMethod = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  };

  const result = await fetch(
    URL.concat(path),
    method === "POST"
      ? postMethod
      : method === "GET"
      ? getMethod
      : method === "DELETE"
      ? deleteMethod
      : method === "PATCH"
      ? patchMethod
      : putMethod
  );

  const response = await result.json();
  return response;
};
