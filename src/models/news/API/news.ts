import axios from 'axios';
import { HackerNewsAPIType } from './types';

export const getHackerNewsAPI = async (): Promise<HackerNewsAPIType> => {
  return new Promise(async (resolve, reject) => {
    const URL = 'https://hn.algolia.com/api/v1/search_by_date?query=mobile';
    try {
      const response = await axios.get(URL);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
