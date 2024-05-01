import { colors } from './colors'
import styled, { keyframes } from 'styled-components'

interface LoaderProps {
  color: string
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;

  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  ${({ color }) =>
    color &&
    `
    color:${color};
        `}
`

export const Loader = ({ color }: LoaderProps) => {
  let colorLoader
  switch (color) {
    case 'white':
      colorLoader = colors.white
      break
    case 'primary':
      colorLoader = colors.primary
  }
  return <LoaderWrapper color={colorLoader} />
}
