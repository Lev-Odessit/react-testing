import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

export default class App extends Component {

	constructor(){
		super();

		this.state = {
			text: '',
			notes: []
		}
	}

	componentDidMount() {
		this.setState({ notes: read_cookie(cookie_key) });
	}

	onChange = event => {
		this.setState({ text: event.target.value });
	};

	submit = () => {
		const { notes, text } = this.state;

		const newNotes = { text };

		notes.push(newNotes);

		this.setState({ notes });

		bake_cookie(cookie_key, this.state.notes);
	};

	clear = () => {
		delete_cookie(cookie_key);

		this.setState({ notes: [] });
	};

	render() {
		return (
			<div>
				<h2>Note to Self</h2>
				<Form inline>
					<FormControl onChange={this.onChange}/>
					{' '}
					<Button onClick={this.submit}>Submit</Button>
				</Form>
				{this.state.notes.map((note,index) => {
					return (
						<Note key={index} note={note} />
					)
				})}
				<hr/>
				<Button onClick={this.clear}>Clear Notes</Button>
			</div>
		)
	}
}
