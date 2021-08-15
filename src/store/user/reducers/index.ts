import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
// import {
//   TournamentResponse,
//   PageMeta,
//   FollowersResponse,
//   ResultsResponse,
//   TournamentDetail,
//   ParticipantsResponse,
//   SuggestedTeamMembersResponse,
//   TournamentMatchResponse,
//   RecruitingResponse,
//   ArenaWinners,
//   TournamentStatus,
//   RecommendedUsers,
//   ParticipantName,
//   TournamentTeamDetail,
// } from '@services/arena.service'
// import { TOURNAMENT_STATUS } from '@constants/tournament.constants'

type StateType = {
  entities?: Array<any>
  loading?: any
  currentRequestId?: any
  error?: any
  test?: any
}

const initialState: StateType = {
  entities: Array(),
  loading: 'idle',
  currentRequestId: 'undefined',
  error: null,
  test: 456
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getRecruitingTournaments.fulfilled, (state, action) => {
    console.log("🚀 ~ builder.addCase ~ action", action)
    state.entities = action.payload.slice(95)
    // let searchTournaments = action.payload.data
    // if (action.payload.meta != undefined && action.payload.meta.current_page > 1) {
    //   searchTournaments = state.searchTournaments.concat(action.payload.data)
    // }

    // state.searchTournaments = searchTournaments
    // state.searchTournamentsMeta = action.payload.meta
  }),
  builder.addCase(actions.getRecruitingTournaments.pending, (state, action) => {
    console.log("🚀 ~ builder.addCase ~ 1111111", action)
    // state.entities = action.payload.slice(95)
    // let searchTournaments = action.payload.data
    // if (action.payload.meta != undefined && action.payload.meta.current_page > 1) {
    //   searchTournaments = state.searchTournaments.concat(action.payload.data)
    // }

    // state.searchTournaments = searchTournaments
    // state.searchTournamentsMeta = action.payload.meta
  })
})
