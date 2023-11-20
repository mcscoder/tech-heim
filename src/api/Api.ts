import { ApiEndPointTypes, apiEndPoint, apiURL } from "@/constants";
import axios from "axios";

export const getRequest = async (endPont: ApiEndPointTypes, filter: string) => {
  const requestURL = `${apiURL}${apiEndPoint[endPont]}${
    filter && "?" + filter
  }`;
  const response = await axios.get(requestURL);
  return response.data;
};

export const postRequest = async (endPont: ApiEndPointTypes, data: object) => {
  const requestURL = `${apiURL}${apiEndPoint[endPont]}`;
  const response = await axios.post(requestURL, data);
  return response.data;
};
