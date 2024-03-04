import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from "axios";

export const apiIntance = (config?: CreateAxiosDefaults) => {
    const api = axios.create(config);
    api.interceptors.request.use((config) => {
        return {
            ...config,
            headers: {} as unknown as AxiosRequestHeaders
        }
    });
    return api
}