import React, { Component } from 'react';

class Card extends Component {

	state = {
		reveal: false
	};

	switch = () => {
		this.setState({reveal: true});
	};

	render() {

		const { prompt, answer } = this.props.card;
		const { reveal } = this.state;

		const revealCondition = reveal ? 'text-revealed' : 'text-hidden';

		return (
			<div className='card' onClick={this.switch}>
				<div className='card-prompt'>
					<h4>{prompt}</h4>
				</div>
				<div className='card-answers'>
					<h4 className={revealCondition}>{answer}</h4>
				</div>
			</div>
		)
	}
}

export default Card;
