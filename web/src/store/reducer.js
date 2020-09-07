
import { combineReducers } from 'redux-immutable';
import Rank from '@/pages/Rank/store/reducer';
import { reducer as recommendReducer } from '@/pages/Recommend/store';

export default combineReducers ({
  rank: Rank,
  recommend: recommendReducer,
});

