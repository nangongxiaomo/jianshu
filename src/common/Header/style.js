import styled from 'styled-components'
import logo from '../../assets/images/logo.png'

export const HeaderWrapper = styled('div')`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled('a').attrs({
  href: '/'
})`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100px;
  height: 58px;
  background: url(${logo});
  background-size: contain;
`

export const HeadHav = styled('div')`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`
export const HeadNavItem = styled('div')`
  line-height: 58px;
  padding: 0 15px;
  font-size: 18px;
  color: #333;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    .icon-size {
      font-size: 24px;
    }
  }
`

export const SearchWrapper = styled('div')`
  display: inline-block;
  position: relative;
  height: 38px;
  margin-top: 9px;
  margin-left: 15px;

  .iconfont {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translate3d(0, -50%, 0);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    &:hover {
      cursor: pointer;
    }
    &.focus {
      color: #fff;
      background-color: #666;
    }
  }
`

export const SearchContent = styled('div')`
  position: absolute;
  left: 0;
  top: 56px;
  padding: 0 20px;
  width: 240px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: -15px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 15px 7.5px;
    border-color: transparent transparent #fff transparent;
  }
`

export const SearchContentTitle = styled('p')`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
`

export const SearchContentSwitch = styled('span')`
  margin-bottom: 10px;
  font-size: 13px;
  color: #969696;
  float: right;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`

export const SearchItemWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const SearchItem = styled('a')`
  display: block;
  padding: 3px 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin-right: 7px;
  margin-bottom: 10px;
`

export const NavSearch = styled('input').attrs({
  placeholder: '搜索',
  type: 'text'
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  border: none;
  outline: none;
  padding: 0 40px 0 20px;
  background-color: #eee;
  font-size: 14px;
  color: #777;
  transition: all 0.3s;
  &.slide-enter,
  &.slide-exit {
    transition: all 0.2s ease-in-out;
  }
  &.slide-enter-active {
    width: 220px;
  }
  &.slide-exit-active {
    width: 160px;
  }
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 220px;
  }
`

export const Addition = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled('div')`
  line-height: 38px;
  float: right;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 15px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.write-article {
    color: #fff;
    background-color: #ec6149;
    .iconfont {
      font-size: 16px;
      padding-right: 5px;
    }
  }
`
