import { combineReducers } from 'redux'
// reducers
import drawers from './drawers'
import themes from './themes'

export default combineReducers({
  drawers,
  themes,
})
