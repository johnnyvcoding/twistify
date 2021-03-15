import React from 'react';
import { TextField } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Follow from '@material-ui/icons/Twitter';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Title from '../Title';
import NotificationCreator from '../Notification';
import axios from 'axios';

const styles = {
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 488,
		padding: '0 30px',
	},
};

class RetweetForm extends React.Component {
	constructor() {
		super();
		this.state = {
			accountName: '',
			selectedValue: '1',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.retweetTweets = this.retweetTweets.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let name = this.state.accountName;
		let quant = this.state.selectedValue;
		this.retweetTweets(name, quant);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	async retweetTweets(name, quant) {
		try {
			let config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};
			let { data } = await axios.get(
				`https://johnny-twister.herokuapp.com/retweet/${name}/${quant}`,
				config
			);
			NotificationCreator(
				'success',
				`Success! I have retweeted ${quant} of ${name}'s Tweets`
			);
		} catch (e) {
			console.log(e);
			NotificationCreator('warning', 'Something Went Wrong!');
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<form className='follow-form' onSubmit={this.handleSubmit}>
				<Title>Let me RETWEET some of your recent Tweets</Title>

				<div>
					<TextField
						id='outlined-basic'
						label='@Username'
						variant='outlined'
						name='accountName'
						onChange={this.handleChange}
					/>
					<NativeSelect
						name='selectedValue'
						onChange={this.handleChange}
						style={{ marginLeft: '5px', height: '3.44rem' }}
					>
						<option value='1'>One</option>
						<option value='2'>Two</option>
						<option value='3'>Three</option>
						<option value='4'>Four</option>
						<option value='5'>Five</option>
					</NativeSelect>
					<Button
						type='submit'
						variant='contained'
						color='secondary'
						className={classes.button}
						style={{ marginLeft: '5px', height: '3.44rem' }}
						startIcon={<Follow />}
					>
						Retweet
					</Button>
				</div>
			</form>
		);
	}
}

RetweetForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RetweetForm);
