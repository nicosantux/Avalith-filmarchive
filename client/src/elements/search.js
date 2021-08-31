import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem 0 0.5rem 0;
  position: relative;
`

const SearchInput = styled.input`
  border: none;
  border-radius: 2rem;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  outline: none;
  padding: 0.5rem 1rem;
  width: 100%;
`

const Icon = styled(FontAwesomeIcon)`
  color: #ccc;
  cursor: pointer;
  position: absolute;
  right: 1rem;
`

export { SearchContainer, SearchInput, Icon }
