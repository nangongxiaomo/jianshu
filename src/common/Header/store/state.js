import { fromJS } from 'immutable'

const state = fromJS({
  focus: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
})

export default state
