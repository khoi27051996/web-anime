import { apiIntance } from "constant";

import { Category, Comic, DataHome, DataHomePage, LoaiDanhSach, SearchComic, SlugComic, Status, TheLoai } from "types";

const api = apiIntance({
    baseURL: import.meta.env.VITE_MANGA_API
})

export const mangaServices = {
    getHome: () => api.get<Status<DataHome>>('/home'),
    getDataPage: (data: LoaiDanhSach) => api.get<Status<DataHomePage>>(`/danh-sach/${data.type}?page=${data.page}`),
    getCategory: () => api.get<Status<Category>>('/the-loai'),
    getDataByCategory: (data: TheLoai) => api.get<Status<DataHomePage>>(`/the-loai/${data.slug}?page=${data.page}`),
    getComic: (data: SlugComic) => api.get<Status<Comic>>(`/truyen-tranh/${data.slug}`),
    getDataSearch: (data: SearchComic) => api.get(`/tim-kiem?keyword=${data.keyword}&page=${data.page}`)
}