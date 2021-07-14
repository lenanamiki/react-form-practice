import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      coolPerson: true,
      favAnimal: '',
      horoscope: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    // eslint-disable-next-line object-curly-newline
    const { name, value, type, checked } = e.currentTarget;
    // eslint-disable-next-line no-unused-expressions
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, coolPerson, favAnimal, horoscope } = this.state;
    return (
      <div>
        <h3>I want to get to know you!</h3>
        <form>
          <input type="text" name="firstName" value={firstName} placeholder="Enter first name" onChange={this.handleChange} />
          <input type="text" name="lastName" value={lastName} placeholder="Enter last name" onChange={this.handleChange} />
          <br />
          <input type="checkbox" name="coolPerson" checked={coolPerson} onChange={this.handleChange} />
          You cool?
          <br />
          <input type="radio" name="favAnimal" value="Cat Person" checked={favAnimal === "Cat Person"} onChange={this.handleChange} />
          I am a cat person
          <input type="radio" name="favAnimal" value="Dog Person" checked={favAnimal === "Dog Person"} onChange={this.handleChange} />
          I am a dog person
          <input type="radio" name="favAnimal" value="Neither" checked={favAnimal === "Neither"} onChange={this.handleChange} />
          Ew, I hate animals
          <br />
          What is your star sign?
          <select value={horoscope} name="horoscope" onChange={this.handleChange}>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;
