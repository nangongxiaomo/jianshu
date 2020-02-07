import Mock from 'mockjs'

export default Mock.mock('/api/searchList', 'get', {
  code: 200,
  'list|10-40': ['@cword(2, 4)']
})
