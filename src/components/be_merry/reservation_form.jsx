import React from 'react';
import { timingSafeEqual } from 'crypto';

class ReservationForm extends React.Component {

  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      numberOfGuests: "",
      date: "",
      message: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value});
  }
  
  handleSubmit(e){
    e.preventDefault();
  }
  
  render(){
    const noteStyle = {};
    if (this.state.message) {
      noteStyle.background = 'white';
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange('name')}
            placeholder='Enter Name'
            required/>
        </label>
        <label>
          Email:
          <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange('email')}
          placeholder='Enter Email Address'
          required/>
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={this.state.phone}
            onChange={this.handleChange('phone')}
            placeholder='Enter Phone Number'
            required/>
        </label>
        <label>
          Number of Guests:
          <input
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleChange('numberOfGuests')}
            placeholder='Enter Number'
            required/>
        </label>
        <label>
          Date of Event:
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleChange('date')}
            placeholder='Enter Date'
            required/>
        </label>
        <label>
          Additional Notes:
          <textarea
            value={this.state.message}
            onChange={this.handleChange('message')}
            placeholder='(optional)'
            style={noteStyle}/>
        </label>
        <button>Make Reservation</button>
      </form>
    ); 
  }
}

export default ReservationForm;