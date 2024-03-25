import axios from "./helpers/axios";
import CryptoJS from "crypto-js";
import { Comics } from "../types/comics";
import { ComicsPromise } from "../types/comicsPromise";
import envs from "../config/enviroments";

export default {
  async getComicsList(startsWith: string): Promise<ComicsPromise[]> {
    const ts = new Date().getTime.toString();
    let response;
    if (startsWith === "") {
      response = await axios.get("/v1/public/comics", {
        params: {
          ts: ts,
          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: 100,
        },
      });
    } else {
      response = await axios.get("/v1/public/comics", {
        params: {
          ts: ts,

          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: 100,
          nameStartsWith: startsWith,
        },
      });
    }
    return response.data.data.results;
  },

  async getComicsListWithOffset(
    offset: number,
    limit: number,
    startsWith: string
  ): Promise<ComicsPromise[]> {
    const ts = new Date().getTime.toString();

    let response;
    if (startsWith === "") {
      response = await axios.get("/v1/public/comics", {
        params: {
          ts: ts,

          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: limit,
          offset: offset,
        },
      });
    } else {
      response = await axios.get("/v1/public/comics", {
        params: {
          ts: ts,

          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: limit,
          offset: offset,
          nameStartsWith: startsWith,
        },
      });
    }
    return response.data.data.results;
  },
  async getComic(postId: number): Promise<Comics> {
    const ts = new Date().getTime.toString();

    const response = await axios.get(`/v1/public/comics/${postId}`, {
      params: {
        ts: ts,

        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
      },
    });

    return response.data.data.results[0];
  },
};
