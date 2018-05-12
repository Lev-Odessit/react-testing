import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clue from './Clue';

class Category extends Component {

	constructor() {
		super();

		this.state = {
			clues: []
		}
	}

	componentDidMount() {
		const { category } = this.props;

		fetch(`http://jservice.io/api/clues?category=${category.id}`)
			.then(response => response.json())
			.then(json => this.setState({clues: json}));
	}

	render() {
		const { category } = this.props;
		const { clues } = this.state;
		return (
			<div>
				<Link className='link-home' to='/'>
					<h4>Home</h4>
				</Link>
				<h2>{category.title}</h2>
				{
					clues.map(clue => {
						return (
							<Clue key={clue.id} clue={clue}/>
						)
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { category: state.category }
}

export default connect(mapStateToProps)(Category);
