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

	render() {
		return(
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new" >
						Add a Post
					</Link>
				</div>
				List of blog posts
			</div>
		);
	}
}

//function mapDispatchToProps(dispatch) {
//	return bindActionCreators({ fetchPosts }, dispatch);
//}

//export default connect(null, {mapDispatchToProps})(PostsIndex);
// shorthand instead of mapDispatch...bindActionCreators
export default connect(null, { fetchPosts })(PostsIndex);