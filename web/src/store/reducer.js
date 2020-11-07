import { combineReducers } from "redux-immutable"
import { reducer as RankReducer } from "@/pages/Rank/store"
import { reducer as recommendReducer } from "@/pages/Recommend/store"
import { reducer as singersReducer } from '@/pages/Singers/store'
export default combineReducers({
  rank: RankReducer,
  recommend: recommendReducer,
  singers: singersReducer
})
