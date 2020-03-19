import styled from 'styled-components'

export const Container = styled.div`
  width: 960px;
  padding-top: 30px;
  margin: 0 auto;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export const Left = styled.div`
  width: 625px;
  float: left;
  .banner {
    border-radius: 8px;
  }
`

export const Right = styled.div`
  width: 240px;
  float: right;
`
