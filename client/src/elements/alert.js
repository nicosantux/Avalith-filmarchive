import styled from 'styled-components'
import { theme } from 'theme/theme'

const AlertContainer = styled.div`
  background: ${(props) => (props.type === 'error' ? theme.danger : theme.success)};
  border-radius: 0.5rem;
  padding: 1rem;
  position: fixed;
  left: calc(50% - 150px);
  top: 2rem;
  width: 300px;

  p {
    color: white;
    font-size: clamp(0.875rem, 2.5vw, 1rem);
    text-align: center;
  }
`

export { AlertContainer }
