import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme } from 'theme/theme'

const MovieContainer = styled.div`
  align-items: center;
  background: ${theme.black};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  position: relative;

  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1.5rem;
    justify-content: flex-start;
  }
`

const PosterContainer = styled.div`
  width: 250px;

  @media (min-width: 600px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 400px;
  }
`

const Title = styled.h2`
  color: white;
  font-size: clamp(1.125rem, 2.5vw, 2rem);
  margin-bottom: 0.5rem;
`

const Info = styled.h3`
  color: white;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 400;
  margin-bottom: 0.5rem;
`

const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 1024px) {
    bottom: 1rem;
    position: absolute;
    left: 40%;
    width: 30%;
  }
`

const Btn = styled.button`
  background: ${(props) => (props.color === 'danger' ? theme.danger : theme.primary)};
  border: none;
  border-radius: 2rem;
  color: white;
  cursor: pointer;
  font-size: clamp(12px, 2.5vw, 1rem);
  padding: 0.5rem 1rem;
`

const IconContainer = styled.div`
  left: 20px;
  padding: 0.25rem;
  top: 20px;

  @media (min-width: 600px) {
    left: unset;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  @media (min-width: 1024px) {
    left: unset;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MoviesGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 1rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.33fr));
  }
`

const ErrorMessage = styled.p`
  color: white;
  margin-top: 2rem;
  text-align: center;
`

const Container = styled.div`
  background: ${theme.black};
  border: 5px solid ${theme.black};
  position: relative;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`

const Poster = styled.img`
  object-fit: cover;
  width: 100%;
`

const MovieTitle = styled.h3`
  color: white;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`

const Year = styled.h3`
  color: white;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin-bottom: 0.5rem;
`
const Genre = styled.h3`
  color: white;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`

export {
  MovieContainer,
  PosterContainer,
  Poster,
  Title,
  Info,
  BtnContainer,
  Btn,
  IconContainer,
  Icon,
  SearchContainer,
  MoviesGrid,
  ErrorMessage,
  Container,
  Description,
  MovieTitle,
  Year,
  Genre,
}
