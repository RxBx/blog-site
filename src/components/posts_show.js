import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
	//params.id is being supplied by the URL, 
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}


	render() {
		//identical to const post = this.props.post
		const { post } = this.props;

		//fires when/while API is pending return of data
		if(!post) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {post: state.posts.post }
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);