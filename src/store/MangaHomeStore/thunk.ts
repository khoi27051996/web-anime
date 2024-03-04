import { createAsyncThunk } from "@reduxjs/toolkit";
import { mangaServices } from "service";
import { LoaiDanhSach, SearchComic, SlugComic, TheLoai } from "types";


export const getDataHome = createAsyncThunk(
    'getDataHome',
    async (_, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getHome();

            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDataPage = createAsyncThunk(
    'getDataPage',
    async (payload: LoaiDanhSach, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getDataPage(payload);
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDataUpdate = createAsyncThunk(
    'getDataUpdate',
    async (payload: LoaiDanhSach, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getDataPage(payload);
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDataComplete = createAsyncThunk(
    'getDataComplete',
    async (payload: LoaiDanhSach, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getDataPage(payload);

            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDataCategory = createAsyncThunk(
    'getDataCategory',
    async (_, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getCategory();
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDataByCategory = createAsyncThunk(
    'getDataByCategory',
    async (payload: TheLoai, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getDataByCategory(payload);
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDataComic = createAsyncThunk(
    'getDataComic',
    async (payload: SlugComic, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getComic(payload)
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const GetDataSearch = createAsyncThunk(
    "getDataSearch",
    async (payload: SearchComic, { rejectWithValue }) => {
        try {
            const data = await mangaServices.getDataSearch(payload);
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)