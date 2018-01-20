import React, { Component } from 'react';

class Subscriptions extends Component {
  constructor(props) {
    super(props);
  }	
  
  state = {
    email: '',
    error: false,
    success: false
  }

  onChangeInput = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  clearMessages = () => {
    setTimeout(() => {
      this.setState({
        error: false,
        success: false
      })
    }, 3000);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let email = this.state.email;
    let regex = /\S+@\S+\.\S+/;

    if(regex.test(email)) {
      this.saveSubscription(email);
    } else {
      this.setState({error: true});
    }

    this.clearMessages();
  }

  saveSubscription = (email) => {
    const URL_EMAIL = 'http://localhost:3004/subcriptions';

    fetch(URL_EMAIL,{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          email: '',
          success: true
        })
      });
  }

  render() {
    return(
      <div className="subcribe_panel">
        <h3>Subscribe to us</h3>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Type your email..." type="text" value={this.state.email} onChange={this.onChangeInput}/>
          <div className={this.state.error ? 'error show' : 'error'}>Check your</div>
          <div className={this.state.success ? 'success show' : 'success'}>Thank you</div>
        </form>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus dolores enim laboriosam modi nobis quaerat!
        </small>
      </div>
    ) 
  }
  
}

export default Subscriptions;