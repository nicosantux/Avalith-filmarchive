import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme } from 'theme/theme'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;

  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 40%;
  }
`

const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem 0;
`

const Btn = styled.button`
  background: ${theme.primary};
  border: none;
  border-radius: 1rem;
  box-shadow: 2px 2px 16px 1px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  outline: none;
  padding: 0.5rem 2rem;
`

const Title = styled.h2`
  color: white;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-family: 'Patua One', sans-serif;
  font-weight: 400;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`

const LinkForm = styled(Link)`
  color: white;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin-top: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    margin-top: 1rem;
  }
`

const InputContainer = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
`

const Inputs = styled.input`
  border: none;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  height: 2.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  padding: 0 2rem 0 0.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: ${theme.success};
  font-size: 1rem;
  opacity: 0;
  position: absolute;
  right: 8px;
  top: calc(50% - 0.75rem);

  ${(props) =>
    props.valid === 'true' &&
    css`
      color: ${theme.success};
      opacity: 1;
    `}

  ${(props) =>
    props.valid === 'false' &&
    css`
      color: ${theme.danger};
      opacity: 1;
    `}

  @media (min-width: 1024px) {
    top: calc(50% - 1rem);
  }
`

const TextError = styled.p`
  color: ${theme.danger};
  display: none;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin-bottom: 1rem;

  ${(props) =>
    props.valid === 'true' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valid === 'false' &&
    css`
      display: block;
    `}

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`

export { Form, BtnContainer, Btn, Title, LinkForm, InputContainer, Inputs, Icon, TextError }
