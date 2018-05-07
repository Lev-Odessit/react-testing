import React, { Component } from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from "../actions";


export class StackList extends Component {
	componentDidMount() {
		const {loadStacks} = this.props;

		if (this.props.stacks.length === 0) loadStacks(stacks);
	}


	render() {

		const { setStack, stacks } = this.props;

		return (
			<div>
				{
					stacks.map(stack => {
						return (
							<Link
								to='stack'
								key={stack.id}
								onClick={() => setStack(stack)}
							>
								<h4>{stack.title}</h4>
							</Link>
						);
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { stacks: state.stacks }
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
