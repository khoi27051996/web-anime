import { combineReducers } from "redux";
import { mangaHomeReducer } from "./MangaHomeStore";

export const rootReducer = combineReducers({
    mangaHome: mangaHomeReducer
})