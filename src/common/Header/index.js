import React, { Component } from "react";
import { connect } from "react-redux";
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
} from "./style";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

class Header extends Component {
  showSearchArea = show => {
    if (show) {
      return (
        <CSSTransition
          appear
          timeout={200}
          unmountOnExit
          in={this.props.focus}
          classNames={"fade"}
        >
          <SearchContent>
            <SearchContentTitle>
              热门搜索<SearchContentSwitch>换一批</SearchContentSwitch>
            </SearchContentTitle>
            <SearchItemWrapper>
              <SearchItem>教育</SearchItem>
              <SearchItem>教深度育</SearchItem>
              <SearchItem>教深度育</SearchItem>
              <SearchItem>教的育</SearchItem>
              <SearchItem>教肥嘟嘟育</SearchItem>
              <SearchItem>教颠三倒四发福育</SearchItem>
            </SearchItemWrapper>
          </SearchContent>
        </CSSTransition>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focus, inputFocus, inputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <HeadHav>
          <HeadNavItem className={"left active"}>首页</HeadNavItem>
          <HeadNavItem className={"left"}>下载APP</HeadNavItem>
          <HeadNavItem className={"right"}>登录</HeadNavItem>
          <HeadNavItem className={"right"}>
            <i className={"iconfont icon-size"}>&#xe636;</i>
          </HeadNavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focus} classNames={"slide"}>
              <NavSearch
                onFocus={inputFocus}
                onBlur={inputBlur}
                className={focus ? "focus" : ""}
              />
            </CSSTransition>
            <i className={focus ? "focus iconfont" : "iconfont"}>&#xe614;</i>
            {this.showSearchArea(focus)}
          </SearchWrapper>

          <Addition>
            <Button className={"write-article"}>
              <i className={"iconfont"}>&#xe615;</i>
              写文章
            </Button>
            <Button className={"reg"}>注册</Button>
          </Addition>
        </HeadHav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focus: state.getIn(["headerReducer", "focus"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    inputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
