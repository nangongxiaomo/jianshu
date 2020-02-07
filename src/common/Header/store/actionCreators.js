import * as types from './action-types'
import { getHeaderSearchList } from '../../../http/api'
import { ERR_OK } from '../../../http/config'
import { fromJS } from 'immutable'

export const searchFocus = page => ({
  type: types.SEARCH_FOCUS,
  page
})

export const searchBlur = () => ({
  type: types.SEARCH_BLUR
})

export const getSearchList = () => {
  return dispatch => {
    getHeaderSearchList().then(res => {
      if (res.code === ERR_OK) {
        dispatch(_submitSearchList(res.list))
      }
    })
  }
}

export const mouseEnter = () => ({
  type: types.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: types.MOUSE_LEAVE
})

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  page
})

const _submitSearchList = list => ({
  type: types.SEARCH_LIST,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})
