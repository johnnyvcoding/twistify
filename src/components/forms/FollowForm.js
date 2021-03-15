import React from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Follow from '@material-ui/icons/Twitter';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import NotificationCreator from '../Notification';
import axios from 'axios';
import Title from '../Title';

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

class FollowForm extends React.Component {
	constructor() {
		super();

		this.state = {
			accountName: '',
		};

		this.followUser = this.followUser.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.followUser(this.state.accountName);
	}

	async followUser(username) {
		try {
			let config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};
			let { data } = await axios.get(
				`https://johnny-twister.herokuapp.com/follow/${username}`,
				config
			);
			NotificationCreator('success', `Success! I have followed @${username}`);
		} catch (e) {
			console.log(e);
			NotificationCreator('warning', 'Something Went Wrong!');
		}
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<form className='follow-form' onSubmit={this.handleSubmit}>
				<Title>Want an extra follower? Enter your Twitter handle</Title>

				<div>
					<TextField
						id='outlined-basic'
						label='@Username'
						variant='outlined'
						name='accountName'
						onChange={this.handleChange}
					/>
					<Button
						type='submit'
						variant='contained'
						color='secondary'
						className={classes.button}
						style={{ marginLeft: '5px', height: '3.44rem' }}
						startIcon={<Follow />}
					>
						Follow
					</Button>
				</div>
			</form>
		);
	}
}

FollowForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowForm);
