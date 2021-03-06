import React, { Component } from 'react';

import Featured from './featured';
import Subscriptions from './subscriptions';
import Blocks from './blocks';
import Poll from './poll';

const URL_HOME = 'http://localhost:3004/home';

class Home extends Component {
  constructor(props) {
    super(props);
  }	
  
  state = {
    home: ''
  };

  componentDidMount() {
    fetch(URL_HOME, {method: 'GET'})
      .then(res => res.json())
      .then(data => this.setState({home: data}));
  }

  render() {
    return(
      <div>
        <Featured slides={this.state.home.slider}/>
        <Subscriptions/>
        <Blocks blocks={this.state.home.blocks}/>
        <Poll/>
      </div>
    ) 
  }
  
}

export default Home;