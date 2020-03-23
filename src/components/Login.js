import React from 'react'
import FormField from "./FormField"
import ValidationButton from "./ValidationButton"

class Login extends React.Component {
  render() {
    return (
      <div className="page page-login">
        <h1>Login</h1>
        <form>
          <FormField/>
          <FormField/>
          <ValidationButton/>
        </form>
      </div>
    )
  }
}

export default Login
