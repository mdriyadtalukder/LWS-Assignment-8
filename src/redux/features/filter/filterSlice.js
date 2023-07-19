import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nav: 'Book Store',
    filters: 'All',
    search: '',
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        navi: (state, action) => {
            state.nav = action.payload;
        },
        filterss: (state, action) => {
            state.filters = action.payload;
        },
        seraching: (state, action) => {
            state.search = action.payload;
        }
    }
})
export default filterSlice;
export const { navi, filterss, seraching } = filterSlice.actions;