import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme } from 'theme/theme'

const MobileContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileMenu = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  transition: 0.3s all ease-in-out;
`

const MobileLinksContainer = styled.div`
  align-items: center;
  background: ${theme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: absolute;
  top: 3.75rem;
  width: 100%;
  z-index: 1;
`

const MobileMenuItem = styled(Link)`
  background: none;
  border: none;
  color: white;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
  outline: none;
  text-decoration: none;
`

const Header = styled.header`
  background: ${theme.black};
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
  }
`

const Title = styled(Link)`
  color: white;
  font-family: 'Patua One', sans-serif;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  outline: none;
  text-decoration: none;

  span {
    color: ${theme.primary};
  }
`

const MenuContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    align-items: center;
    color: white;
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }
`

const MenuItem = styled(Link)`
  color: white;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-left: 1.5rem;
  outline: none;
  text-decoration: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: ${theme.primary};
  }
`

const LinksContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    align-items: center;
    color: white;
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }
`

export {
  MobileContainer,
  MobileMenu,
  MobileLinksContainer,
  MobileMenuItem,
  Header,
  Nav,
  Title,
  MenuContainer,
  MenuItem,
  LinksContainer,
}
