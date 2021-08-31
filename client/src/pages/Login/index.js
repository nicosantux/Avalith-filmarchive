import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import Navbar from 'components/Navbar'
import Input from 'components/Input'
import Alert from 'components/Alert'
import { login } from 'services/auth'
import { regex } from 'helpers/regex'
import { Title, Form, BtnContainer, Btn, LinkForm } from 'elements/form'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState({ value: '', valid: null })
  const [password, setPassword] = useState({ value: '', valid: null })
  const [alertType, setAlertType] = useState({ type: '', message: '' })
  const [alert, setAlert] = useState(false)
  const { setUser } = useAuth()

  useEffect(() => {
    return () => {
      setEmail({ value: '', valid: null })
      setPassword({ value: '', valid: null })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email.valid === 'true' && password.valid === 'true') {
      const res = await login(email.value, password.value)

      if (res.error) {
        setAlert(true)
        setAlertType({ type: 'error', message: res.msg })

        return
      }

      localStorage.setItem('uid', res.uid)
      localStorage.setItem('name', res.name)
      localStorage.setItem('token', res.token)
      localStorage.setItem('role', res.role)
      setUser({ uid: res.uid, name: res.name, token: res.token, role: res.role })
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
      <Title>Login to filmarchve</Title>
      <Form autoComplete="off" onSubmit={handleSubmit}>
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
          <LinkForm to="/register">Not in filmarchive? Register</LinkForm>
        </BtnContainer>
      </Form>
      <Alert alert={alert} message={alertType.message} setAlert={setAlert} type={alertType.type} />
    </>
  )
}

export default Login
