import React from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Title from './Title';

class PopularAccounts extends React.Component {
	constructor() {
		super();

		this.state = {
			likeCount: [],
			retweetCount: [],
			twitterAccounts: [
				'cristiano',
				'barackobama',
				'rihanna',
				'drake',
				'benawad',
				'elonmusk',
			],
			accountName: '',
		};

		this.fixData = this.fixData.bind(this);
		this.getRandomAccount = this.getRandomAccount.bind(this);
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

	getRandomAccount() {
		let randomIndex = Math.floor(
			Math.random() * this.state.twitterAccounts.length
		);

		let name = this.state.twitterAccounts[randomIndex].toUpperCase();
		this.setState({ accountName: `@${name}` });
		return this.state.twitterAccounts[randomIndex];
	}

	async componentDidMount() {
		let config = {
			headers: { 'Access-Control-Allow-Origin': '*' },
		};
		let randomAccount = this.getRandomAccount();
		let { data } = await axios.get(
			`https://johnny-twister.herokuapp.com/getfav/${randomAccount}/5`,
			config
		);
		this.fixData(data)
	}

	render() {

		return (
			<div className='popular-graph'>
				<Title>Past Likes and Retweets For {this.state.accountName}</Title>
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
						maintainAspectRatio: true,
						responsive: true,
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
			</div>
		);
	}
}

export default PopularAccounts;
