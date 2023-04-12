import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios  from 'axios';

export const fetchToken = createAsyncThunk(
    'auth/fetchToken',
    async (bodyObject) => {
      const response = await axios.post('http://localhost:3000/auth', bodyObject);
      return response.data
    }
  )

const initialState = { 
    user: null,
    loading: 'idle',
    errors: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchToken.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(fetchToken.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.user = action.payload;
        })
        .addCase(fetchToken.rejected, (state, action) => {
            state.loading = 'failed';
            state.errors = action.error;
        })
  }
})

export default authSlice.reducer