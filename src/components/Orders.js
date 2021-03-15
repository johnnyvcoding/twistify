import React, {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import SimplifyData from './extra/timelinedata'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount };
}

// const rows = [
// 	createData(
// 		0,
// 		'16 Mar, 2019',
// 		'Elvis Presley',
// 		'Tupelo, MS',
// 		'VISA ⠀•••• 3719',
// 		312.44
// 	),
// 	createData(
// 		1,
// 		'16 Mar, 2019',
// 		'Paul McCartney',
// 		'London, UK',
// 		'VISA ⠀•••• 2574',
// 		866.99
// 	),
// 	createData(
// 		2,
// 		'16 Mar, 2019',
// 		'Tom Scholz',
// 		'Boston, MA',
// 		'MC ⠀•••• 1253',
// 		100.81
// 	),
// 	createData(
// 		3,
// 		'16 Mar, 2019',
// 		'Michael Jackson',
// 		'Gary, IN',
// 		'AMEX ⠀•••• 2000',
// 		654.39
// 	),
// 	createData(
// 		4,
// 		'15 Mar, 2019',
// 		'Bruce Springsteen',
// 		'Long Branch, NJ',
// 		'VISA ⠀•••• 5919',
// 		212.79
// 	),
// ];

// let rows = []

async function myTimeline() {
	let config = {
		headers: { 'Access-Control-Allow-Origin': '*' },
	};

	let { data } = await axios.get(
		`https://johnny-twister.herokuapp.com/mytimeline`,
		config
	);



}




// const useStyles = makeStyles((theme) => ({
// 	seeMore: {
// 		marginTop: theme.spacing(3),
// 	},
// }));


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
		console.log('this is the state: ', this.state)
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




			// <div className={classes.seeMore}>
			// 	<Link color='primary' href='#' onClick={preventDefault}>
			// 		See more orders
			// 	</Link>
			// </div>
