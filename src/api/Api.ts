import { ApiEndPointTypes, apiEndPoint, apiURL } from "@/constants";
import axios from "axios";

export const getRequest = async (endPont: ApiEndPointTypes) => {
  const requestURL = `${apiURL}${apiEndPoint[endPont]}`;
  const response = await axios.get(requestURL);
  return response.data;
};
