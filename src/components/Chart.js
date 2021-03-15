import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	ResponsiveContainer,
} from 'recharts';
import Title from './Title';
import Popular from './PopularAcc'




// export default function Chart() {
// 	const theme = useTheme();

// 	return
// 	);
// }

class Chart extends React.Component {
	render() {
		return(		<React.Fragment>
			<Title>Today</Title>
		
			<Popular />

		</React.Fragment>)
	}
}


export default Chart
