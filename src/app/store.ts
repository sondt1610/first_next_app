import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
// import userReducer from '../features/user/userSlice'
import userReducer from '@store/user'
// import logger from '@types/redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer.reducers,
  },
  // middleware: [logger],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// console.log("🚀 ~ RootState",  ReturnType<typeof store.getState>)
// console.log("🚀 ~ store.getState", store.getState)
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// console.log("🚀 ~ store.dispatch", store.dispatch)
export type AppDispatch = typeof store.dispatch