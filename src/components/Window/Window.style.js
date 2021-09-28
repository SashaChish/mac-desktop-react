import styled, { keyframes } from 'styled-components'
import { white, border1px, opacity, grayOpacity } from '../../theme'

const hide = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    height: 0;
    width: 0;
    visibility: hidden;
  }
`

const show = keyframes`
  0% {
    opacity: 0;
    height: 0;
    width: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Wrap = styled.div`
  width: 35vw;
  height: 60vh;
  min-width: 500px;
  min-height: 400px;
  margin: 100px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  background: ${white};
  animation: ${({ сontentHidden }) => (сontentHidden ? hide : show)} 0.35s
    forwards;

  @media (max-width: 1400px) {
    min-width: 450px;
    min-height: 350px;
    margin: 100px 0 70px 70px;
  }
`

export const Header = styled.header`
  height: 13%;
  border-bottom: ${`${border1px} ${grayOpacity}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Points = styled.div`
  display: flex;
  margin: 0 0 0 20px;
`

export const Point = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: border1px grayOpacity;
  background: ${props => props.color};
  box-shadow: 1px 1px 5px ${props => props.color};
  margin: 0 0 0 6px;
`
export const Title = styled.h3`
  @media (max-width: 1400px) {
    font-size: 16px;
    padding: 0 0 0 20px;
  }
`

export const Search = styled.div`
  margin: 0 10px 0 0;
`

export const SearchIcon = styled.i`
  width: 26px;
  height: 26px;
  line-height: 22px;
  text-align: center;
  left: 28px;
  position: relative;
  z-index: 1;
  float: left;
  opacity: 0.6;
`

export const Input = styled.input`
  height: 25px;
  width: 120px;
  border: ${`${border1px} `} rgba(189, 190, 189, ${opacity});
  border-radius: 15px;
  padding: 0 0 0 26px;

  &:focus {
    outline: none;
  }
`

export const Body = styled.div`
  padding: 0 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;

  @media (max-width: 1400px) {
    height: 300px;
  }
`

export const ContentWrap = styled.div`
  width: 94%;
  height: 90%;
  border: ${`${border1px} `} gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(235, 232, 232, 0.89);
`

export const Content = styled.div`
  min-width: 350px;
  min-height: 270px;
  width: 70%;
  height: 70%;
  border: ${`${border1px} `} gray;
  overflow-y: scroll;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background: ${white};

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-track {
    background: @white;
    border: @border-1 @gray-opacity;
    box-shadow: inset 1px 0 5px gray;
    -webkit-box-shadow: inset 1px 0 5px gray;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: gray;
  }

  &::-webkit-scrollbar-track-piece {
    margin: 2px;
  }

  @media (max-width: 1400px) {
    min-height: 245px;
  }
`

export const Border = styled.span`
  display: none;
  position: relative;
  right: 4%;
  bottom: 5%;
  width: 108%;
  height: 110%;
  border: 3px solid gray;
  border-radius: 5px;
`

export const Image = styled.div`
  margin: 10px 10px 10px 10px;
  height: 40%;
  flex-basis: 25%;
  flex-grow: 1;
  background: url(${props => props.url}) center center/cover;
  cursor: pointer;

  &:hover ${Border} {
    display: block;
  }
`
