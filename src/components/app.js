import React, { Component } from 'react';

//invoke child routes by using this.props.children
export default class App extends Component {
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}
