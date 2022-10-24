import axios from "axios";
import base64 from "base-64";
import { config as apiData, config } from "../config";


const getLocalToken = () => {
    const access_token = localStorage.getItem('access_token')
    return access_token;
}


export const getToken = async () =>{
    const response = await axios({
        method: "post",
        url: config.api.authUrl,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${base64.encode(
            `50f1c12730ea448094aafbe522bdc9f2:3f8a4d9f11094144b0c917857f1cd089`
          )}`,
        },
        data: "grant_type=client_credentials",
      });
    return response.data.access_token;
}

export const getReleases = async() => {
    const token = getLocalToken();
    try {
        const response = await axios({
          method: "get",
          url: apiData.api.baseUrl + "/browse/new-releases",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.log(error);
      }
} 



export const getFeaturedPlaylists = async () => {
  const token = await getToken();
  try {
    const response = await axios({
      method: "get",
      url: apiData.api.baseUrl + "/browse/featured-playlists",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getAllCategories = async () => {
  const token = await getToken();
  try {
    const response = await axios({
      method: "get",
      url: apiData.api.baseUrl + "/browse/categories",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};





