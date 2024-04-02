import axios from "./helpers/axios";
import CryptoJS from "crypto-js";
import { Comics } from "../types/comics";
import { ComicsPromise } from "../types/comicsPromise";
import envs from "../config/enviroments";

export default {
  async getComicsList(startsWith: string): Promise<ComicsPromise> {
    const ts = Date.now().toString();

    const response = await axios.get("/v1/public/comics", {
      params: {
        ts: ts,
        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
        limit: 25,
        titleStartsWith: startsWith ? startsWith : undefined,
      },
    });

    
    return response.data.data;
  },

  async getComicsListWithOffset(
    offset: number,
    startsWith: string
  ): Promise<ComicsPromise> {
    const ts = Date.now().toString();

    const response = await axios.get("/v1/public/comics", {
      params: {
        ts: ts,
        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
        limit: 25,
        offset: offset,
        titleStartsWith: startsWith ? startsWith : undefined,
      },
    });

    return response.data.data;
  },

  async getComic(postId: number): Promise<Comics> {
    const ts = Date.now().toString();

    const response = await axios.get(`/v1/public/comics/${postId}`, {
      params: {
        ts: ts,
        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
      },
    });

    return response.data.data.results[0];
  },
};
