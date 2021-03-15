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
			likeCount: [],
			retweetCount: [],
			formSubmitted: false,
			accountName: '',
		};

		this.fixData = this.fixData.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getData = this.getData.bind(this);
	}

	fixData(dataArray) {
		let likes = [];
		let retweetCount = [];

		for (let i = 0; i < dataArray.length; i++) {
			let favoriteCount = dataArray[i].favorite_count;
			let retweetQuant = dataArray[i].retweet_count;
			retweetCount.push(retweetQuant);
			likes.push(favoriteCount);
		}

		this.setState({
			likeCount: likes,
			retweetCount: retweetCount,
		});
	}

	async getData(name) {
		let config = {
			headers: { 'Access-Control-Allow-Origin': '*' },
		};

		let { data } = await axios.get(
			`https://johnny-twister.herokuapp.com/getfav/${name}/5`,
			config
		);
		this.fixData(data)
	}

	handleChange(event) {
		this.setState({ accountName: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ formSubmitted: true });
    this.getData(this.state.accountName)
	}



	render() {
		return (
			<div className='popular-graph'>
				<form onSubmit={this.handleSubmit}>
					<Title>Past Likes and Retweets For </Title>
					<TextField
						id='outlined-basic'
						label='@username '
						variant='outlined'
						onChange={this.handleChange}
					/>
				</form>

				{this.state.formSubmitted ? (
					<Bar
						height={100}
						width={400}
						data={{
							labels: ['T1', 't2', 'T3', 'T4', 'T5'],
							datasets: [
								{
									label: '# of Likes',
									data: [...this.state.likeCount],
									backgroundColor: '#3f51b5',
								},
								{
									label: '# of Retweets',
									data: [...this.state.retweetCount],
									backgroundColor: '#f50057',
								},
							],
						}}
						options={{
							maintainAspectRatio: false,
              responsive: false,
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
