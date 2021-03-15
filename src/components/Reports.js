import React from 'react';
import PopularAccountsReport from './PopularAcc';
import DynamicAccount  from './DynamicGraph'
import AccountComparitor from './AcccountComparator'
import AccComparitorBar from './AccComparitorBar'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Reports() {
	return (
		<Container maxWidth='lg'>
			<Paper item='true' xs={1} md={8} lg={9}>
				<PopularAccountsReport />
			</Paper>
			<br />
			<Paper item='true' xs={1} md={8} lg={9}>
				<DynamicAccount />
			</Paper>
			<br />
			<Paper item='true' xs={1} md={8} lg={9}>
				<AccountComparitor />
			</Paper>
			<br />
			<Paper item='true' xs={1} md={8} lg={9}>
				<AccComparitorBar />
			</Paper>
		</Container>
	);
}

export default Reports;
