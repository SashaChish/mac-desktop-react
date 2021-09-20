import React from 'react'

import { Global, AppWrap } from './App.style'
import Header from './components/Header/Header'
import Window from './components/Window/Window'
import Footer from './components/Footer/Footer'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      сontentHidden: false,
      backgroundUrl: '',
    }
  }

  toggleOnClick = () => {
    this.setState({ сontentHidden: !this.state.сontentHidden })
  }

  changeBackOnClick = url => () => {
    this.setState({ backgroundUrl: url })
  }

  render() {
    const { backgroundUrl, сontentHidden } = this.state
    return (
      <>
        <Global />
        <AppWrap backgroundUrl={backgroundUrl}>
          <Header />
          <Window
            changeBackOnClick={this.changeBackOnClick}
            сontentHidden={сontentHidden}
          />
          <Footer toggleOnClick={this.toggleOnClick} />
        </AppWrap>
      </>
    )
  }
}
