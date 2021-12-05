import { combineReducers } from 'redux'
import getprofileReducers from './getprofileReducer'
import registerReducers from './registerReducer'

export default combineReducers({
  profile: getprofileReducers,
  register: registerReducers
})
