import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'
// import logger from '@types/redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
  // middleware: [logger],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch