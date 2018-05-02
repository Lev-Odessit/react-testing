import React, { Component } from 'react';

export default class Note extends Component {

	constructor(props) {
		super(props);


	}

	render() {
		const { note } = this.props;

		return (
			<div className="note">
				<p>{note.text}</p>
			</div>
		)
	}
}
