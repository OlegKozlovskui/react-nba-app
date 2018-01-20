import React, { Component } from 'react';

const URL_TEAMS = 'http://localhost:3004/teams';

class Poll extends Component {
  constructor(props) {
    super(props);
  }	
  
  state = {
    pollTeams: []
  };

  fetchPoll() {
    fetch(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`, {method: 'GET'})
      .then(res => res.json())
      .then(data => this.setState({pollTeams:data}));
  }

  addCount(count, id) {
    fetch(`${URL_TEAMS}/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({count: count + 1})
    })
      .then(() => this.fetchPoll());
  }

  renderPoll() {
    const position = ['1ST', '2ND', '3RD'];
    return this.state.pollTeams.map((item, i) => {
      return(
        <div key={item.id} className="poll_item" onClick={() => this.addCount(item.count, item.id)}>
          <img src={`/images/teams/${item.logo}`} alt=""/>
          <h4>{position[i]}</h4>
          <div>{item.count} Votes</div>
        </div>
      )
    });
  }

  componentDidMount() {
    this.fetchPoll();
  }

  render() {
    return(
      <div className="home_poll">
        <h3>Who will be next champion ?</h3>
        <div className="poll_container">
          {this.renderPoll()}
        </div>
      </div>
    ) 
  }
  
}

export default Poll;