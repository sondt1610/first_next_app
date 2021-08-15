import { createSelector } from '@reduxjs/toolkit'
// import { MatchItemType } from '@services/arena.service'
import { RootState } from '@app/store'

const getRoot = (state: RootState) => state.users
// const getUserId = (state: RootState) => state.auth?.user?.id

export const getUsers = createSelector(getRoot, (state) => state)
