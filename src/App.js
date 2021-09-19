import React from 'react'

import { Global, AppWrap } from './App.style'
import Header from './components/Header/Header'
import Window from './components/Window/Window'
import Footer from './components/Footer/Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hideContent: true,
      backgroundUrl: '',
    }
  }

  toggleOnClick = () => {
    this.setState({ hideContent: !this.state.hideContent })
  }

  changeBackOnClick = url => {
    this.setState({ backgroundUrl: url })
  }

  render() {
    return (
      <>
        <Global />
        <AppWrap backgroundUrl={this.state.backgroundUrl}>
          <Header />
          <Window
            changeBackOnClick={this.changeBackOnClick}
            hideContent={this.state.hideContent}
          />
          <Footer toggleOnClick={this.toggleOnClick} />
        </AppWrap>
      </>
    )
  }
}
