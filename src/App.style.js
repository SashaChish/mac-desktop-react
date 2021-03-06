import styled, { createGlobalStyle } from 'styled-components'

import { defaultBackground } from './data/index'

export const Global = createGlobalStyle`
  @font-face {
    src: url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;1,200;1,300&display=swap'),
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-weight: 800;
    font-family: 'Roboto Mono', monospace;
  }

`

export const AppWrap = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${({ backgroundUrl }) => backgroundUrl || defaultBackground})
    center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`
