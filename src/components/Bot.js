import React from 'react';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';


import RetweetForm from './forms/FollowForm'
import LikeRecentForm from './forms/FavoriteForm'
import RetweetRecentForm from './forms/RetweetForm';



function Bot() {


	return (
		<div className='bot-cont'>
			<Container maxWidth='lg'>
				<Paper item='true' xs={1} md={8} lg={9}>
					<RetweetForm />
				</Paper>
				<br />
				<Paper item='true' xs={1} md={8} lg={9}>
					<LikeRecentForm />
				</Paper>
				<br />

				<Paper item='true' xs={1} md={8} lg={9}>
					<RetweetRecentForm />
				</Paper>
				<br />
			</Container>
		</div>
	);
}
export default Bot;
