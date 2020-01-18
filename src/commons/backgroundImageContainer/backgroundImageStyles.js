import styled from 'styled-components'

export const Container = styled.img`
  top:0;
  bottom:0;
  left:0;
  right:0;
  height: 100%;
  width: 100%;
  z-index: -100;
  position: absolute;
  opacity: 0.3;
  animation: fadeOut 1s;
  @keyframes fadeOut {
      100% {
        opacity: 0.3;
      }
      0% {
        opacity: 0.1%
      }
  }
`
