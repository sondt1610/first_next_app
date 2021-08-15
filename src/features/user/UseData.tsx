// import { useAppDispatch, useAppSelector } from '@store/hooks'
import user from '@store/user'
// import { createMetaSelector } from '@store/metadata/selectors'
import { useSelector, useDispatch } from 'react-redux'

const { selectors, actions } = user
// const getRecruitingTournamentsMeta = createMetaSelector(actions.getRecruitingTournaments)

const UseData = () => {
// console.log("🚀 ~ actions.4444", actions.getRecruitingTournaments.payload)
  const dispatch = useDispatch()

  let users = useSelector(selectors.getUsers)
//   if(users?.entities.length !) {

//   }
//   const getRecruitingTournaments = () => dispatch(actions.getRecruitingTournaments({ page: 1 }))

  return { users }
}

export default UseData
