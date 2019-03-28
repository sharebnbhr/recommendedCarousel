import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount(){
  // }

  getProperty() {
    axios.get('api/recommendedCarousel').then(response => {
      console.log(response);
    });
  }

  render() {
    return <div>hello from App Component</div>;
  }
}
