import styled, { keyframes } from 'styled-components'

import { grayOpacity, border1px, white } from '../../theme'

export const AppFooter = styled.footer`
  width: 35%;
  position: absolute;
  bottom: 5%;
  left: 40%;
  z-index: 1;
`

export const Wrap = styled.div`
  min-width: 450px;
  width: 80%;
  height: 80px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${grayOpacity};

  @media (max-width: 1400px) {
    min-width: 430px;
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
  height: 60px;
  background: url(images/footer/${props => props.name}.png) center center /
    cover no-repeat;

  &:first-child::before {
    content: '22';
    display: table-cell;
    position: relative;
    width: 22px;
    height: 22px;
    font-size: 12px;
    left: 260%;
    bottom: 5px;
    border-radius: 50%;
    background: red;
    color: ${white};
    text-align: center;
    vertical-align: middle;
  }

  &:hover {
    cursor: pointer;
    animation: ${focus} 0.5s forwards;
  }

  @media (max-width: 1400px) {
    &:first-child::before {
      width: 20px;
      height: 20px;
      left: 250%;
    }
  }
`

export const Seperator = styled.div`
  height: 60px;
  margin: 0 15px;
  border: ${border1px + ' '} black;
`
