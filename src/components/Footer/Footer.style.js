import styled, { keyframes } from 'styled-components'

import { grayOpacity, border1px, white } from '../../theme'

export const AppFooter = styled.footer`
  position: relative;
  width: 550px;
  display: flex;
  justify-content: center;
  align-self: center;
  bottom: 5%;

  @media (max-width: 768px) {
    margin: 0;
    max-width: 70%;
  }

  @media (max-width: 425px) {
    max-width: 90%;
  }
`

export const Wrap = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${grayOpacity};

  @media (max-width: 768px) {
    min-width: 500px;
  }

  @media (max-width: 425px) {
    min-width: 350px;
  }
`

const focus = keyframes`
  from {
    transform: scale(1);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
  }
  to {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
  }
`

export const Image = styled.div`
  flex-basis: 15%;
  height: 70px;
  background: url(${({ name }) =>
      process.env.PUBLIC_URL.concat('/images/footer/', name, '.png')})
    center center / cover no-repeat;

  &:first-child::before {
    content: '22';
    display: table-cell;
    position: relative;
    width: 25px;
    height: 24px;
    font-size: 12px;
    left: 245%;
    bottom: 5px;
    border-radius: 50%;
    background: red;
    color: ${white};
    text-align: center;
    vertical-align: middle;

    @media (max-width: 768px) {
      width: 23px;
      height: 22px;
      left: 250%;
    }

    @media (max-width: 425px) {
      left: 190%;
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    cursor: pointer;
    animation: ${focus} 0.5s forwards;
  }

  @media (max-width: 425px) {
    flex-basis: 16%;
    height: 55px;
  }
`

export const Separator = styled.div`
  height: 60px;
  margin: 0 15px;
  border: ${`${border1px} `} black;
`
