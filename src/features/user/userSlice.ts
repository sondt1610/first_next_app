import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface MyData {
  // ...
}

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, { getState, requestId }) => {
    console.log("🚀 ~ userId", userId)
    const { currentRequestId, loading } = getState().users
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // console.log("🚀 ~ 1111111111", response.json())
    // console.log("🚀 ~ response", response)
    

    return response.json()
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: Array(),
    loading: 'idle',
    currentRequestId: 'undefined',
    error: null,
    test: 123
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        console.log("🚀 ~ 3333333", action)
        if (state.loading === 'idle') {
          state.loading = 'pending'
          state.currentRequestId = action.meta.requestId
        }
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        console.log("🚀 ~ 444444", action)
        const { requestId } = action.meta
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.entities = [...state.entities, ...action.payload.slice(95)]
          state.loading = 'idle'
          // state.entities.push(action.payload.slice(95))
          state.currentRequestId = 'undefined'
        }
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        console.log("🚀 ~ 5555555", action)
        const { requestId } = action.meta
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle'
          state.error = action.error
          state.currentRequestId = 'undefined'
        }
      })
  },
})



export default usersSlice.reducer
