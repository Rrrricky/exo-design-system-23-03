import React from 'react'
import FormField from "./form/FormField"
import ValidationButton from "./form/ValidationButton"

class Login extends React.Component {
  state = {
    title: 'Connection',
    subtitle: 'Connect to your account',
    button: 'Connection',
    fields: {
      field1: {
        label: 'name',
        input: 'Adeline Berte',
        id: 1
      },
      field2: {
        label: 'email',
        input: '',
        id: 2
      },
      field3: {
        label: 'phone',
        input: '',
        id: 3
      },
      field4: {
        label: 'password',
        input: '',
        id: 4
      },
      field5: {
        label: 'confirm password',
        input: '',
        id: 5
      },
    }
  }
  render() {
    return (
      <div className="page page-login">
        <h1>{this.state.title}</h1>
        <div>{this.state.subtitle}</div>
        <form>
          {Object.keys(this.state.fields).map(key => <FormField key={key} index={key} fields={this.state.fields}/>)}
          <ValidationButton button={this.state.button} />
        </form>
      </div>
    )
  }
}

export default Login
