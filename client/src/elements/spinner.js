import styled from 'styled-components'
import { theme } from 'theme/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: calc(50vh - 2rem);
  left: calc(50vw - 2rem);
`

const SpinnerLoading = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border-left-color: ${theme.primary};
  margin-bottom: 1rem;
`

const Title = styled.h2`
  color: white;
  font-size: 1rem;
`

export { Container, SpinnerLoading, Title }
