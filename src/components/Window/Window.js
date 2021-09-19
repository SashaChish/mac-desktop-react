import React from 'react'

import { key, colors } from '../../data/index'
import {
  Wrap,
  Header,
  Points,
  Point,
  Search,
  SearchIcon,
  Input,
  Body,
  ContentWrap,
  Content,
  Image,
  Border,
  Title,
} from './Window.style'

const addImage = (images, changeBack) => {
  return images.map(img => (
    <Image onClick={() => changeBack(img.url)} key={img.id} url={img.url}>
      <Border />
    </Image>
  ))
}

export default class Window extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    this.getImage()
  }

  async getImage() {
    const responce = await fetch(
      `https://pixabay.com/api/?key=${key}&image_type=photo`,
    )
    const data = await responce.json()

    const images = data.hits.map(img => ({
      id: img.id,
      url: img.largeImageURL,
      tags: img.tags,
    }))

    this.setState({ images })
  }

  render() {
    return (
      <Wrap>
        <Header>
          <Points>
            {colors.map(color => (
              <Point key={color} color={color} />
            ))}
          </Points>
          <div>
            <Title>Desktop &amp; Screen Saver</Title>
          </div>
          <Search>
            <SearchIcon className="fa fa-search fa-1x" />
            <Input type="text" placeholder="Search" />
          </Search>
        </Header>
        <Body>
          <ContentWrap>
            <Content hideContent={this.props.hideContent}>
              {addImage(this.state.images, this.props.changeBackOnClick)}
            </Content>
          </ContentWrap>
        </Body>
      </Wrap>
    )
  }
}
