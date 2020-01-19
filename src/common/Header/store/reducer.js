import defaultState from './state'
import * as types from './action-types'

export default (state = defaultState, action) => {
  if (action.type === types.SEARCH_FOCUS) {
    return state.set('focus', true)
  }
  if (action.type === types.SEARCH_BLUR) {
    return state.set('focus', false)
  }
  return state
}