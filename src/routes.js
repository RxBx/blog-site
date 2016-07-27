import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

//Routes can nest in a Route
//IOW google.com/ ...renders: App
//IndexRoute only displays on "/" and no other pages
//but  google.com/greet2 ...renders: App, Greeting not IndexRoute
//Nec to place 'this.props.children' in App.js to load child routes here!!!

export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
	</Route>
);

