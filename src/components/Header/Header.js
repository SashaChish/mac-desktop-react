import React from 'react'
import { dateNow } from '../../utility'
import { Wrap, Container, Logo, I, Time } from './Header.style'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: dateNow(),
    }
  }

  componentDidMount() {
    this.dateUpdate()
  }

  dateUpdate() {
    setInterval(() => {
      if (new Date().getSeconds() === 0) this.setState({ date: dateNow() })
    }, 1000)
  }

  render() {
    const { date } = this.state
    return (
      <Wrap>
        <Container>
          <Logo>
            <I className="fa fa-apple fa-lg" />
          </Logo>
          <Time>
            <p>{date}</p>
          </Time>
        </Container>
      </Wrap>
    )
  }
}
