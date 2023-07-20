import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { config } from '../../common/config';
import axios from 'axios'

export interface pokemonState {
    loading: boolean;
    pokemon: any | null;
    error: string | undefined;
}

const initialState: pokemonState = {
    loading: false,
    pokemon: null,
    error: undefined,
}

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {

    try {
        const response = await axios.get(`${config.API_URL.pokemon}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemon = action.payload;
        })
        builder.addCase(fetchPokemon.rejected, (state, action) => {
            state.loading = false;
            state.pokemon = null;
            state.error = action.error.message;
        })
    }
});


//export const pokemonSelector = (state: RootState) => state.pokemonReducer;
export default pokemonSlice.reducer;