import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	//defining an object on the PostsNew class - to give us access 
	//to an upstream parent context Router at index.js
	static contextTypes = {
		router: PropTypes.object
	};
	//these props are from react-router state
	onSubmit(props) {
		this.props.createPost(props)
			// once createPost request / promise server post is resolved, do the following
			.then(() => {
				//blog post has been create, navigate user to index
				// we navigate4 by calling this.context.router.push with the
				//new path to navigate to.
				this.context.router.push('/');
			});
	}

	render() {
		//ES6 shorthand for const handleSubmit = this.props.handleSubmit
		const { fields: { title, categories, content}, handleSubmit } = this.props;

		//below, using {...title} injects the 'redux-form' managed item/object
		//into the input element for access to JS object props

		//handleSubmit can use an actionCreator to 'finish' the form submit action
		//then we break out 'onSubmit' to a new method to handle createPost &
		//a 'push' page routing method
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
				</div>
				<div className="text-help">
						{content.touched ? content.error : ''}
					</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link className="btn btn-danger" to="/" >Cancel </Link>
			</form>
		);
	}
}

//validation
function validate(values) {
	const errors = {};
	if (!values.title) {
		//below somehow gets attached to title.error in form's error div above?
		errors.title = 'Enter a username';
	}
	if (!values.categories) {
		//below somehow gets attached to title.error in form's error div above?
		errors.categories = 'Enter categories';
	}
	if (!values.content) {
		//below somehow gets attached to title.error in form's error div above?
		errors.content = 'Enter a post message';
	}

	return errors;
}

// w old connect args are: mapStateToProps, mapDispatchToProps

//but reduxForm args are: onfig, mapStateToProps, mapDispatchToProps

//configs form, and elements
//this allows redux-form to send a 'form' object w. fields as 'key-values' to the Redux state,
//by using reduxForm, and without using connect/dispatch from 'react-redux'
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);