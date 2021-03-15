import React from 'react';

import Table from '@material-ui/core/Table';
import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import SimplifyData from './extra/timelinedata'







class Orders extends React.Component {
	constructor() {
		super();
		this.state = {
			rows: []
		}
	}

	async componentDidMount() {
			let config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};

			let { data } = await axios.get(
				`https://johnny-twister.herokuapp.com/mytimeline`,
				config
			);
			this.setState({
				rows: SimplifyData(data)
			})

	}




	render() {
		return (
			<React.Fragment>
				<Title>My Timeline</Title>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell>@Name</TableCell>
							<TableCell>Tweet</TableCell>
							<TableCell>Likes</TableCell>
							<TableCell>Retweets</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.text}</TableCell>
								<TableCell>{row.retweets}</TableCell>

								<TableCell align='right'>{row.likes}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</React.Fragment>
		);
	}
}

export default Orders



