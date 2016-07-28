import React, { Component } from 'react';
import { connect } from 'react-redux';
//import{ bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

//componentWillMount
class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		//accesses the posts delivered from Redux state using mapStateToProps at bottom
		//and now accessible off 'props' based on API delivery object
		//They are mapped onto each new list item by this function
		return this.props.posts.map((post) => 
			//ID is used to give each list item a unique ID
			<li className="list-group-item" key={post.id}>
				<span className="pull-xs-right">{post.categories}</span>
				<strong>{post.title}</strong>
			</li>
			);
	}


	render() {
		return(
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new" >
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

//
function mapStateToProps(state) {
	//state.posts.all is the redux state defined on reducers/index.js &
	//updated by reducer_posts.js.
	//and here links to this.props.post in this page's React container
	return { posts: state.posts.all };
}
// standard bindActionCreators config below gets supplanted by shortcut code
//function mapDispatchToProps(dispatch) {
//	return bindActionCreators({ fetchPosts }, dispatch);
//}

//export default connect(null, {mapDispatchToProps})(PostsIndex);
// shorthand instead of mapDispatch...bindActionCreators
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);