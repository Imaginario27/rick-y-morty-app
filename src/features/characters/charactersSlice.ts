// Import necessary dependencies and modules
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

// Define the structure of a character object
export interface Character {
    id: string;
    randomKey: string;
    name: string;
    species: string;
    status: string;
    origin: {
        name: string;
    };
    image: string;
}

// Define the shape of the characters state
interface CharactersState {
    characters: Character[];
    loading: boolean;
    error: string | null;
}

// Initialize the initial state for characters
const initialState: CharactersState = {
    characters: [],
    loading: false,
    error: null,
};

// Create an asynchronous action to fetch characters from an API
export const fetchCharacters = createAsyncThunk<Character[], number>(
    'characters/fetchCharacters',
    async (page) => {
        // Fetch data from the Rick and Morty API using axios
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return response.data.results;
    }
);

// Create a characters slice that contains reducers and extra reducers
const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        // Reducer to set characters data in the state
        setCharacters: (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload;
        },
        // Reducer to set the loading state
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        // Reducer to set an error message
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Handle asynchronous actions with createAsyncThunk
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                // Set characters data and reset loading and error
                state.characters.push(...action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchCharacters.pending, (state) => {
                // Set loading state while the data is being fetched
                state.loading = true;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                // Handle errors and set the error message
                state.error = action.error.message || 'An error occurred.';
                state.loading = false;
            });
      },
  });

// Export actions and reducers
export const { setCharacters, setLoading, setError } = charactersSlice.actions;

// Selectors to access state data
export const selectCharacters = (state: RootState) => state.characters.characters;
export const selectLoading = (state: RootState) => state.characters.loading;
export const selectError = (state: RootState) => state.characters.error;

// Export the characters reducer
export default charactersSlice.reducer;
