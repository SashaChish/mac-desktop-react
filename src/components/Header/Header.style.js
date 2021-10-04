import styled from 'styled-components'
import { grayOpacity, white } from '../../theme'

export const Wrap = styled.header`
  width: 100%;
  background: ${grayOpacity};
`

export const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  width: 20px;
  margin: 10px 0 5px 20px;
  color: ${white};
`

export const I = styled.i`
  filter: drop-shadow(1px 3px 5px white);
`

export const Time = styled.div`
  max-width: 300px;
  margin: 10px 10px 5px 0;
  color: ${white};
`
