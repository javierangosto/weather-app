import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoading: false,
        data: {},
        error: null,
      },
    reducers: {
        startLoadingWeather: ( state ) => {
            state.isLoading = true;
        },
        setWeather: ( state, action ) => {
            state.isLoading = false;
            state.data = action.payload.data || '';
            state.error = action.payload.error || '';
        },
    }
});

export const { startLoadingWeather, setWeather } = weatherSlice.actions;