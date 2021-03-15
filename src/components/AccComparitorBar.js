import React from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { Bar } from 'react-chartjs-2';
import Title from './Title';

class DynamicAccount extends React.Component {
	constructor() {
		super();

		this.state = {
			formSubmitted: false,
			accountOneName: '',
			accountTwoName: '',
			accountOne: {
				likeCount: [],
				retweetCount: [],
			},
			accountTwo: {
				likeCount: [],
				retweetCount: [],
			},
		};

		this.fixData = this.fixData.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getData = this.getData.bind(this);
	}

	fixData(dataArray, name) {
		let likes = [];
		let retweetCount = [];

		for (let i = 0; i < dataArray.length; i++) {
			let favoriteCount = dataArray[i].favorite_count;
			let retweetQuant = dataArray[i].retweet_count;
			retweetCount.push(retweetQuant);
			likes.push(favoriteCount);
		}

		this.setState({
			[name]: {
				likeCount: likes,
				retweetCount: retweetCount,
			},
		});
	}

	async getData(nameOne, nameTwo) {
		let config = {
			headers: { 'Access-Control-Allow-Origin': '*' },
		};

		let { data } = await axios.get(
			`https://johnny-twister.herokuapp.com/getfav/${nameOne}/5`,
			config
		);

		let dataTwo = await axios.get(
			`https://johnny-twister.herokuapp.com/getfav/${nameTwo}/5`,
			config
		);

		this.fixData(data, 'accountOne');
		this.fixData(dataTwo.data, 'accountTwo');
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ formSubmitted: true });
		this.getData(this.state.accountOneName, this.state.accountTwoName);
	}

	render() {
		let accountOne = this.state.accountOne;
		let accountTwo = this.state.accountTwo;
		return (
			<div className='popular-graph'>
				<form onSubmit={this.handleSubmit}>
					<Title>Compare Popularity (Bar Graph)</Title>

					<h3>Account One</h3>
					<TextField
						name='accountOneName'
						id='outlined-basic'
						label='@username '
						variant='outlined'
						onChange={this.handleChange}
						required
					/>

					<h3>Account Two</h3>
					<TextField
						name='accountTwoName'
						id='outlined-basic'
						label='@username '
						variant='outlined'
						onChange={this.handleChange}
						required
					/>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						style={{ marginLeft: '5px', height: '3.44rem' }}
					>
						Submit
					</Button>
				</form>

				{this.state.formSubmitted ? (
					<Bar
						height={100}
						width={400}
						data={{
							labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
							datasets: [
								{
									label: `${this.state.accountOneName} # of Likes`,
									data: [...accountOne.likeCount],
									backgroundColor: '#3f51b5',
								},
								{
									label: `${this.state.accountOneName} # of Retweets`,
									data: [...accountOne.retweetCount],
									backgroundColor: '#f50057',
								},
								{
									label: `${this.state.accountTwoName} # of Likes`,
									data: [...accountTwo.likeCount],
									backgroundColor: '#32a852',
								},
								{
									label: `${this.state.accountTwoName} # of Retweets`,
									data: [...accountTwo.retweetCount],
									backgroundColor: '#FFD700',
								},
							],
						}}
						options={{
							maintainAspectRatio: false,
							scales: {
								yAxes: [
									{
										ticks: {
											beginAtZaro: true,
										},
									},
								],
							},
						}}
					/>
				) : null}
			</div>
		);
	}
}

export default DynamicAccount;
