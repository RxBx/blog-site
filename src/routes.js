import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

const Greeting = () => {
	return <div>Hey There!</div>;
};

//Routes can nest in a Route
//IOW google.com/ ...renders: App
//IOW google.com/greet2 ...renders: App, Greeting
//but nec to place this.props.children in App.js!!
//IndexRoute only displays on "/" and no other pages
export default (
	<Route path="/" component={App} >
	<IndexRoute component={PostsIndex} />
		<Route path="greet" component={Greeting} />
		<Route path="greet2" component={Greeting} />
		<Route path="greet3" component={Greeting} />
	</Route>
);

