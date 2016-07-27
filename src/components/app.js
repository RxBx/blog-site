import React, { Component } from 'react';

//invoke child routes by using this.props.children
export default class App extends Component {

	//the .children are the child routes from 'routes' - they get ref'd on usage in index.js
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}
