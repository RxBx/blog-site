import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {
		//ES6 shorthand for const handleSubmit = this.props.handleSubmit
		const { fields: { title, categories, content}, handleSubmit } = this.props;

		//below, using {...title} injects the 'redux-form' managed item/object
		//into the input element for access to JS object props

		//handleSubmit can use an actionCreator to 'finish' the form submit action
		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

// w old connect args are: mapStateToProps, mapDispatchToProps

//but reduxForm args are: onfig, mapStateToProps, mapDispatchToProps

//configs form, and elements
//this allows redux-form to send a 'form' object w. fields as 'key-values' to the Redux state,
//by using reduxForm, and without using connect/dispatch from 'react-redux'
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);