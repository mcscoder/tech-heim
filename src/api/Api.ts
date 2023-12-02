import { ApiEndPointTypes, apiEndPoint, apiURL } from "@/constants";
import axios from "axios";

export const getRequest = async (
  endPont: ApiEndPointTypes,
  query: string = ""
) => {
  const requestURL = `${apiURL}${apiEndPoint[endPont]}${query}`;
  console.log(requestURL);
  const response = await axios.get(requestURL, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response.data;
};

export const postRequest = async (endPont: ApiEndPointTypes, data: object) => {
  const requestURL = `${apiURL}${apiEndPoint[endPont]}`;
  const response = await axios.post(requestURL, data);
  return response.data;
};
