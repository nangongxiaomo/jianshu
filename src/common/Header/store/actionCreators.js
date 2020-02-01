import * as types from './action-types'
import { getHeaderSearchList } from '../../../http/api'
import { ERR_OK } from '../../../http/config'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: types.SEARCH_FOCUS
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

const _submitSearchList = list => ({
  type: types.SEARCH_LIST,
  list: fromJS(list)
})
