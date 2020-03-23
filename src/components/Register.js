import React from 'react'
import FormField from "./FormField"
import ValidationButton from "./ValidationButton"

class Register extends React.Component {
  state = {
    cards: {}
  }
  render() {
    return (
      <div className="page page-register">
        <h1>Register</h1>
        <form>
          <FormField />
          <FormField />
          <ValidationButton />
        </form>
        {/* <div className="cards flex-grid"> */}
        {/*
        <div className="grid">
          { Object.keys(this.state.cards).map(key => <Card key={key} cards={this.state.cards[key]} removeCard={this.removeCard} index={key} />) }
        </div>
        */}
      </div>
    )
  }
}

export default Register
