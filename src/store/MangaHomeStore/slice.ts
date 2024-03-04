import { createSlice } from "@reduxjs/toolkit";
import { Category, Comic, DataHome, DataHomePage, DataSearch } from "types"
import { GetDataSearch, getDataByCategory, getDataCategory, getDataComic, getDataComplete, getDataHome, getDataPage, getDataUpdate } from ".";



type MangaHome = {
    dataHome?: DataHome,
    dataPage?: DataHomePage,
    dataUpdate?: DataHomePage,
    dataComplete?: DataHomePage,
    dataCategory?: Category,
    dataByCategory?: DataHomePage,
    comic?: Comic,
    dataSearch?: DataSearch
};

const initialState: MangaHome = {

}

const mangaHomeSlice = createSlice({
    name: 'MangaHome',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getDataHome.fulfilled, (state, { payload }) => {
            state.dataHome = payload.data
        }).addCase(getDataPage.fulfilled, (state, { payload }) => {
            state.dataPage = payload.data
        }).addCase(getDataUpdate.fulfilled, (state, { payload }) => {
            state.dataUpdate = payload.data
        }).addCase(getDataComplete.fulfilled, (state, { payload }) => {
            state.dataComplete = payload.data
        }).addCase(getDataCategory.fulfilled, (state, { payload }) => {
            state.dataCategory = payload.data
        }).addCase(getDataByCategory.fulfilled, (state, { payload }) => {
            state.dataByCategory = payload.data
        }).addCase(getDataComic.fulfilled, (state, { payload }) => {
            state.comic = payload.data
        }).addCase(GetDataSearch.fulfilled, (state, { payload }) => {
            state.dataSearch = payload.data
        })
    },
})

export const { reducer: mangaHomeReducer, actions: mangaHomeActions } = mangaHomeSlice