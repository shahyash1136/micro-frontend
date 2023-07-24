import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../common/config';
import axios from 'axios'

export interface pokemonState {
    loading: boolean;
    species: any | {};
    error: string | undefined;
}

const initialState: pokemonState = {
    loading: false,
    species: {},
    error: undefined,
}

export const fetchPokemonSpecies = createAsyncThunk('pokemon/fetchPokemonSpecies', async (id: string) => {
    try {
        const response = await axios.get(`${config.API_URL.pokemonSpecies.replace('{{pokemonId}}', id)}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

export const speciesSlice = createSlice({
    name: 'species',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonSpecies.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(fetchPokemonSpecies.fulfilled, (state, action) => {
            state.loading = false;
            state.species = action.payload;
        })
        builder.addCase(fetchPokemonSpecies.rejected, (state, action) => {
            state.loading = false;
            state.species = null;
            state.error = action.error.message;
        })
    }
});

export default speciesSlice.reducer;