import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  HeadHav,
  HeadNavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchContent,
  SearchContentTitle,
  SearchContentSwitch,
  SearchItemWrapper,
  SearchItem
} from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

class Header extends Component {
  showSearchArea = () => {
    const { focus, mouseIn, list, page, totalPage, mouseEnter, mouseLeave, changePage } = this.props
    const convertList = list.toJS()
    const newList = []
    if (convertList.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        convertList[i] &&
          newList.push(<SearchItem key={convertList[i]}>{convertList[i]}</SearchItem>)
      }
    }
    if (focus || mouseIn) {
      return (
        <SearchContent onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchContentTitle>
            热门搜索
            <SearchContentSwitch onClick={() => changePage(page, totalPage)}>
              换一批
            </SearchContentSwitch>
            <img className='refresh-icon' src={require('../../assets/images/刷新.svg')} alt='' />
          </SearchContentTitle>
          <SearchItemWrapper>{newList}</SearchItemWrapper>
        </SearchContent>
      )
    } else {
      return null
    }
  }
  render() {
    const { focus, inputFocus, inputBlur, list, page } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <HeadHav>
          <HeadNavItem className={'left active'}>首页</HeadNavItem>
          <HeadNavItem className={'left'}>下载APP</HeadNavItem>
          <HeadNavItem className={'right'}>登录</HeadNavItem>
          <HeadNavItem className={'right'}>
            <i className={'iconfont icon-size'}>&#xe636;</i>
          </HeadNavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focus} classNames={'slide'}>
              <NavSearch
                onFocus={() => inputFocus(list, page)}
                onBlur={inputBlur}
                className={focus ? 'focus' : ''}
              />
            </CSSTransition>
            <i className={focus ? 'focus iconfont' : 'iconfont'}>&#xe614;</i>
            {this.showSearchArea()}
          </SearchWrapper>

          <Addition>
            <Button className={'write-article'}>
              <i className={'iconfont'}>&#xe615;</i>
              写文章
            </Button>
            <Button className={'reg'}>注册</Button>
          </Addition>
        </HeadHav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focus: state.getIn(['headerReducer', 'focus']),
    list: state.getIn(['headerReducer', 'list']),
    mouseIn: state.getIn(['headerReducer', 'mouseIn']),
    page: state.getIn(['headerReducer', 'page']),
    totalPage: state.getIn(['headerReducer', 'totalPage'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputFocus(list, page) {
      list.size === 0 && dispatch(actionCreators.getSearchList())
      dispatch(actionCreators.searchFocus(page))
    },
    inputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    mouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    mouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    changePage(page, totalPage) {
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(0))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
