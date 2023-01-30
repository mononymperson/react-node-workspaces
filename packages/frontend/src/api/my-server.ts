import axios, { AxiosError, AxiosResponse } from 'axios'
import { ApiResponse } from 'common'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const getHelloWorld = async () => {
  try {
    const { data } = await axiosClient.get<
      any,
      AxiosResponse<ApiResponse<string>>
    >('/hello-world')

    return data.data
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        ...error.response?.data,
      }
    }

    return {
      data: null,
      message: (error as Error).message,
      status: 0,
    }
  }
}
