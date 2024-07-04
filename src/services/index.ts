import { baseUrl , headerConfig} from "@/config/config.env";


interface RequestOptions {
  method: string;
  headers: HeadersInit;
  body?: string;
}



const Services = {
  post: async (path: string, body: any): Promise<any> => {
    try {
      const requestOptions: RequestOptions = {
        method: "post",
        headers: headerConfig ,
        body: JSON.stringify(body),
      };

      const response = await fetch(baseUrl + path, requestOptions);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },

  get: async (path: string, payload?: any): Promise<any> => {
    try {
      let endpoint = baseUrl + path;

      if (payload) {
        endpoint = `${baseUrl + path}?${new URLSearchParams(payload)}`;
      }

      const requestOptions: RequestOptions = {
        method: "get",
        headers: headerConfig,
      };

      const response = await fetch(endpoint, requestOptions);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};

export default Services;
