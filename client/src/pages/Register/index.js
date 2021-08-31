import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Input from 'components/Input'
import Alert from 'components/Alert'
import { register } from 'services/auth'
import { regex } from 'helpers/regex'
import { Title, Form, BtnContainer, Btn, LinkForm } from 'elements/form'

const Register = () => {
  const history = useHistory()
  const [firstName, setFirstName] = useState({ value: '', valid: null })
  const [lastName, setLastName] = useState({ value: '', valid: null })
  const [email, setEmail] = useState({ value: '', valid: null })
  const [password, setPassword] = useState({ value: '', valid: null })
  const [alertType, setAlertType] = useState({ type: '', message: '' })
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    return () => {
      setAlertType(false)
      setAlertType({ type: '', message: '' })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      firstName.valid === 'true' &&
      lastName.valid === 'true' &&
      email.valid === 'true' &&
      password.valid === 'true'
    ) {
      const res = await register(firstName.value, lastName.value, email.value, password.value)

      if (res.error) {
        setAlert(true)
        setAlertType({ type: 'error', message: res.msg })

        return
      }

      localStorage.setItem('uid', res.uid)
      localStorage.setItem('name', res.name)
      localStorage.setItem('token', res.token)
      localStorage.setItem('role', res.role)
      setFirstName({ value: '', valid: null })
      setLastName({ value: '', valid: null })
      setEmail({ value: '', valid: null })
      setPassword({ value: '', valid: null })
      history.push('/home')
    } else {
      setAlert(true)
      setAlertType({ type: 'error', message: 'Complete the form correctly' })
    }
  }

  return (
    <>
      <Navbar />
      <Title>Register to filmarchve</Title>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          error="First name must have 3 to 20 characteres"
          name="firstName"
          placeholder="First Name"
          regex={regex.names}
          setState={setFirstName}
          state={firstName}
          type="text"
        />
        <Input
          error="Last name must have 3 to 20 characteres"
          name="lastName"
          placeholder="Last Name"
          regex={regex.names}
          setState={setLastName}
          state={lastName}
          type="text"
        />
        <Input
          error="Invalid email address"
          name="email"
          placeholder="Email"
          regex={regex.email}
          setState={setEmail}
          state={email}
          type="email"
        />
        <Input
          error="Password must have 6 to 16 characters"
          name="password"
          placeholder="Password"
          regex={regex.password}
          setState={setPassword}
          state={password}
          type="password"
        />
        <BtnContainer>
          <Btn>Login</Btn>
          <LinkForm to="/auth">Already in filmarchive? Login</LinkForm>
        </BtnContainer>
      </Form>
      <Alert alert={alert} message={alertType.message} setAlert={setAlert} type={alertType.type} />
    </>
  )
}

export default Register
