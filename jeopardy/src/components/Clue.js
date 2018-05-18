import React, { Component } from 'react';

export class Clue extends Component {

	state = {
		reveal: false
	};

	render() {
		const { answer, question, value } = this.props.clue;
		const { reveal } = this.state;

		const revealClass = reveal ? 'text-revealed' : 'text-hidden';
		return(
			<div className='clue' onClick={() => this.setState({ reveal: true })}>
				<h4>{value || 'unknown'}</h4>
				<hr/>
				<h5>{question}</h5>
				<hr/>
				<h5 className={revealClass}>{answer}</h5>
			</div>
		)
	}

}

export default Clue;
