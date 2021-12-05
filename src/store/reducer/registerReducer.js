/* eslint-disable indent */
import { SET_REGISTER_DATA } from '../actions/types'

const initialState = {
  registerData: {
    name: '',
    email: '',
    password: '',
    address: '',
    phone_number: '',
    type: 'user',
    complaints: '',
    confirmPassword: '',
    pekerjaan: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_DATA:
      return {
        ...state,
        registerData: action.payload
      }

    default:
      return state
  }
}
