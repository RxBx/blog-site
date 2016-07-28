import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


//Routes can nest in a Route
//IOW google.com/ ...renders: App
//IndexRoute only displays on "/" and no other pages
//but  google.com/greet2 ...renders: App, Greeting not IndexRoute
//Nec to place 'this.props.children' in App.js to load child routes here!!!
// Route "PostsShow" uses React-Router to use params to form unique paths
// supplies this.props.params.id to PostsShow
// and is accessible in DOM as a props.params.[id]
export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);

