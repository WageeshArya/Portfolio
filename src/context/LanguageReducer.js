import { SET_ENGLISH, SET_JAPANESE } from './Types';
export default (state, action) => {
  switch(action.type) {
    case SET_ENGLISH: 
      return {
        ...state,
        language: 'english'
      }
    case SET_JAPANESE: 
      return {
        ...state,
        language: 'japanese'
      }
    default: return state
  }
}