import { combineReducers } from "redux-immutable"
import Rank from "@/pages/Rank/store/reducer"
import { reducer as recommendReducer } from "@/pages/Recommend/store"
import { reducer as singersReducer } from '@/pages/Singers/store'
export default combineReducers({
  rank: Rank,
  recommend: recommendReducer,
  singers: singersReducer
})
