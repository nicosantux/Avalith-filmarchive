import React from 'react'
import { InputContainer, Inputs, Icon, TextError } from 'elements/form'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Input = ({ type, name, placeholder, error, state, setState, regex }) => {
  const onChange = (e) => {
    setState({ ...state, value: e.target.value })
  }

  const validate = () => {
    if (regex.test(state.value)) {
      setState({ ...state, valid: 'true' })
    } else {
      setState({ ...state, valid: 'false' })
    }
  }

  return (
    <>
      <InputContainer>
        <Inputs
          name={name}
          placeholder={placeholder}
          type={type}
          valid={state.valid}
          value={state.value}
          onBlur={validate}
          onChange={onChange}
          onKeyUp={validate}
        />
        <Icon icon={state.valid === 'true' ? faCheckCircle : faTimesCircle} valid={state.valid} />
      </InputContainer>
      <TextError valid={state.valid}>{error}</TextError>
    </>
  )
}

export default Input
