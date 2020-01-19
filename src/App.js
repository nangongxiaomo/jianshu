import React, { Component } from 'react'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './store'
import { GloabalStyled } from './style'
import { Iconfont } from './assets/iconfont/iconfont'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Iconfont />
        <GloabalStyled />
        <Header />
      </Provider>
    )
  }
}
