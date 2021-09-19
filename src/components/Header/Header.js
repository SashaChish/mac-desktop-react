import React from 'react'
import { Wrap, Container, Logo, I, Time } from './Header.style'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
    }
  }

  componentDidMount() {
    this.dateNow()
    this.dateUpdate()
  }

  dateUpdate() {
    setInterval(() => {
      if (new Date().getSeconds() === 0) this.dateNow()
    }, 1000)
  }

  dateNow() {
    const [day, month, dayOfMonth] = new Date().toDateString().split(' ')
    let MM = new Date().getMinutes()
    let HH = new Date().getHours()

    MM = MM < 10 ? '0' + MM : MM
    HH = HH < 10 ? '0' + HH : HH

    const date = `${day} ${dayOfMonth} ${month} ${HH}:${MM}`

    this.setState({ date })
  }

  render() {
    return (
      <Wrap>
        <Container>
          <Logo>
            <I className="fa fa-apple fa-lg" />
          </Logo>
          <Time>
            <p>{this.state.date}</p>
          </Time>
        </Container>
      </Wrap>
    )
  }
}
