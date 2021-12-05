/* eslint-disable indent */
import { SET_PROFILE } from '../actions/types'

const initialState = {
  profile: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      }

    default:
      return state
  }
}
