import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
// import * as services from '@services/arena.service'
import { UPDATE_TOURNAMENT_TEAM_DETAIL } from './types'
import * as types from './types'
import axios, { CancelTokenSource } from 'axios'

const api = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

const getUsers = async (params: any): Promise<any> => {
  const {data} = await api.get<any>('posts')
  return data
}

export const getRecruitingTournaments = createAsyncThunk(
  'test/getUsers',
  async (params, { rejectWithValue }) => {
    try {
      const res = await getUsers(156)
      return res
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)
