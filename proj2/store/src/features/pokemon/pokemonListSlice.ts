import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { config } from '../../common/config';
import axios from 'axios'

export interface pokemonListState {
    loading: boolean;
    pokemonList: any[];
    error: string | undefined;
}

const initialState: pokemonListState = {
    loading: false,
    pokemonList: [],
    error: undefined,
}

export const fetchPokemonList = createAsyncThunk('pokemonList/fetchPokemonList', async () => {
    try {
        const response = await axios.get(`${config.API_URL.pokemonList}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

export const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonList.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemonList = action.payload.results;
        })
        builder.addCase(fetchPokemonList.rejected, (state, action) => {
            state.loading = false;
            state.pokemonList = [];
            state.error = action.error.message;
        })
    }
});

export default pokemonListSlice.reducer;