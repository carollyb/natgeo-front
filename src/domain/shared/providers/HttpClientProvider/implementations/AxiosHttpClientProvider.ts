import axios, { AxiosInstance } from "axios"
import { IDeleteMethodDTO, IGetMethodDTO, IHTTPClientProvider, IHttpResponseDTO, IPatchMethodDTO, IPostMethodDTO, IPutMethodDTO } from "../models/IHttpClientProvider";

export class AxiosHttpClientProvider implements IHTTPClientProvider {

  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      timeout: 30000
    })
  }

  async post<Response>({ url, body, params, headers }: IPostMethodDTO): Promise<IHttpResponseDTO<Response>> {
    try {
      const { data, status } = await this.api.post(url,body || {}, {
        headers: {
          ...headers
        },
        params
      })
      return { data: data as Response, status }
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.error)
      }
      throw error
    }
  }

  async get<Response>({ url, params, headers }: IGetMethodDTO): Promise<IHttpResponseDTO<Response>> {
    try {
      const { data, status } = await this.api.get(url, {
        params,
        headers: {
          ...headers
        }
      })
      return { data: data as Response, status }
    } catch (error: any) {
      if (error.message) {
        throw new Error(error.response.data.error)
      }
      throw error
    }
  }
  async put<Response>({ url, params, headers, body }: IPutMethodDTO): Promise<IHttpResponseDTO<Response>> {
    try {
      const { data, status } = await this.api.put(url, body || {}, {
        headers: {
          ...headers
        },
        params
      })
      return { data: data as Response, status }
    } catch (error: any) {
      if (error.message) {
        throw new Error(error.response.data.error)
      }
      throw error
    }
  }
  async delete<Response>({ url, params, headers }: IDeleteMethodDTO): Promise<IHttpResponseDTO<Response>> {
    try {
      const { data, status } = await this.api.delete(url, {
        headers: {
          ...headers
        },
        params
      })
      return { data: data as Response, status }
    } catch (error: any) {
      if (error.message) {
        throw new Error(error.response.data.error)
      }
      throw error
    }
  }
  async patch<Response>({ url, params, headers, body }: IPatchMethodDTO): Promise<IHttpResponseDTO<Response>> {
    try {
      const { data, status } = await this.api.patch(url, body || {}, {
        headers: {
          ...headers
        },
        params
      })
      return { data: data as Response, status }
    } catch (error: any) {
      if (error.message) {
        throw new Error(error.response.data.error)
      }
      throw error
    }
  }
}