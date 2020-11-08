import {SET_CATEGORY, SET_SORT_BY} from "../type";

export const setSortBy = (data) => ({
  type: SET_SORT_BY,
  payload: data
})

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex
})