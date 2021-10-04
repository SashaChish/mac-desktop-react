import React from 'react'

import { key, colors } from '../../data'
import { styledImg } from '../../utility'
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
  TitleWrap,
} from './Window.style'

export default class Window extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      filterImg: null,
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

  searchImg = e => {
    const { images } = this.state
    const filterImg = images.filter(img => img.tags.includes(e.target.value))

    this.setState({ filterImg })
  }

  render() {
    const { images, filterImg } = this.state
    const { сontentHidden, changeBackOnClick } = this.props

    return (
      <Wrap сontentHidden={сontentHidden}>
        <Header>
          <Points>
            {colors.map(color => (
              <Point key={color} color={color} />
            ))}
          </Points>
          <TitleWrap>
            <Title>Desktop &amp; Screen Saver</Title>
          </TitleWrap>
          <Search>
            <SearchIcon className="fa fa-search fa-1x" />
            <Input
              onChange={e => this.searchImg(e)}
              type="text"
              placeholder="Search"
            />
          </Search>
        </Header>
        <Body>
          <ContentWrap>
            <Content>
              {(filterImg || images).map((img, index, array) => (
                <Image
                  onClick={changeBackOnClick(img.url)}
                  key={img.id}
                  url={img.url}
                  styledImg={styledImg(array)}
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
