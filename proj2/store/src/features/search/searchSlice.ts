import { createSlice } from "@reduxjs/toolkit";

export interface searchState {
    searchValue: String;
}

const initialState: searchState = {
    searchValue: '',
}

export const searchSlice = createSlice({
    name: 'Search',
    initialState,
    reducers: {
        searchValueHandler: (state, action) => {
            state.searchValue = action.payload;
        }
    }
})

export const { searchValueHandler } = searchSlice.actions;

export default searchSlice.reducer