import React, { Component } from 'react'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './store'
import { GloabalStyled } from './style'
import { Iconfont } from './assets/iconfont/iconfont'
import './mock/searchList'
import './mock/labelsList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/home/home'
import Detail from './views/detail/detail'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Iconfont />
        <GloabalStyled />
        <Header />
        <Router>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </Router>
      </Provider>
    )
  }
}
