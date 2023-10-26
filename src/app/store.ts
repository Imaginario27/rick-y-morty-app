import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from '../features/characters/charactersSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
