const login = async (email, password) => {
  const url = process.env.REACT_APP_API_URL

  const credentials = {
    email,
    password,
  }

  try {
    const res = await fetch(`${url}/auth`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    return res.json()
  } catch (error) {
    return error
  }
}

const register = async (firstName, lastName, email, password) => {
  const url = process.env.REACT_APP_API_URL

  const credentials = {
    firstName,
    lastName,
    email,
    password,
  }

  try {
    const res = await fetch(`${url}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    return res.json()
  } catch (error) {
    return error
  }
}

const logout = () => {
  localStorage.removeItem('uid')
  localStorage.removeItem('name')
  localStorage.removeItem('token')
  localStorage.removeItem('role')
}

export { login, register, logout }
