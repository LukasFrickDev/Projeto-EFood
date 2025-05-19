import styled from 'styled-components'
import { cores } from '../../../styles'

export const HeaderPerfilContainer = styled.header`
  padding: 40px 0 65px 0;
  border-radius: 16px;

  display: flex;

  .container {
    width: 100%;
  }
`
export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  li {
    color: ${cores.rosa};
    font-weight: 900;
    font-size: 18px;
  }
`
