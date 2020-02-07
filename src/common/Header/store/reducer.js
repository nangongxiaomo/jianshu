import defaultState from './state'
import * as types from './action-types'

export default (state = defaultState, action) => {
  if (action.type === types.SEARCH_FOCUS) {
    if (action.page !== 0) {
      return state.merge({
        focus: true,
        page: 0
      })
    } else {
      return state.set('focus', true)
    }
  }
  if (action.type === types.SEARCH_BLUR) {
    return state.set('focus', false)
  }

  if (action.type === types.SEARCH_LIST) {
    return state.merge({
      list: action.list,
      totalPage: action.totalPage
    })
  }

  if (action.type === types.MOUSE_ENTER) {
    return state.set('mouseIn', true)
  }

  if (action.type === types.MOUSE_LEAVE) {
    return state.set('mouseIn', false)
  }

  if (action.type === types.CHANGE_PAGE) {
    return state.set('page', action.page)
  }
  return state
}
