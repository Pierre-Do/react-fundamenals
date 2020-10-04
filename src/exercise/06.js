// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = useState(null)
  const [usernameValue, setUsernameValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameValue)
  }

  function handleChange(event) {
    const {value} = event.target
    const isValid = !value || value.match(/^([a-zA-Z])+$/)
    setError(isValid ? null : 'Username must not contain numbers')
    setUsernameValue(value.toLowerCase())
  }

  const hasError = Boolean(error)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={usernameValue}
          onChange={handleChange}
          id="username"
          type="text"
          aria-describedby={hasError ? 'input-error' : undefined}
        />
        {hasError && (
          <div role="alert" className="error" id="input-error">
            {error}
          </div>
        )}
      </div>
      <button disabled={hasError} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
