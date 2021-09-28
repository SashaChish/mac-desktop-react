import React from 'react'

import { key, colors } from '../../data'
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

export default class Window extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    this.getImages()
  }

  async getImages() {
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
    const { images } = this.state
    const { сontentHidden, changeBackOnClick } = this.props

    return (
      <Wrap сontentHidden={сontentHidden}>
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
            <Content>
              {images.map(img => (
                <Image
                  onClick={changeBackOnClick(img.url)}
                  key={img.id}
                  url={img.url}
                >
                  <Border />
                </Image>
              ))}
            </Content>
          </ContentWrap>
        </Body>
      </Wrap>
    )
  }
}
