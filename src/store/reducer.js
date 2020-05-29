
import { combineReducers } from 'redux-immutable';
import Rank from '@/pages/Rank/store/reducer';


export default combineReducers ({
  rank: Rank
});