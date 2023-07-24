import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../common/config';
import axios from 'axios'

export interface pokemonState {
    loading: boolean;
    pokemon: any | {};
    error: string | undefined;
}

const initialState: pokemonState = {
    loading: false,
    pokemon: {},
    error: undefined,
}

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async (id: string) => {
    try {
        const response = await axios.get(`${config.API_URL.pokemon.replace('{{pokemonId}}', id)}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
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

export default pokemonSlice.reducer;