import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Title from './Title';

function Faq() {
  return (
		<div className='faq-cont'>
			<Container maxWidth='lg'>
				<Paper item='true' xs={1} md={8} lg={9} style={{ padding: '8px' }}>
					<Title>How was Twistify built?</Title>
					<p>
						Twistify was built with Tweepy, ReactJS, NodeJS, and Python.
						Twisitify also had to create a custom API in order to work, which
						was built in Python and Flask.{' '}
					</p>
				</Paper>
				<br />
				<Paper item='true' xs={1} md={8} lg={9} style={{ padding: '8px' }}>
					<Title>Hardest Part?</Title>
					<p>
						The hardest part was definitely building an API in Python and
						deploying it. Also, writing Python code on Windows is not the ideal{' '}
					</p>
				</Paper>
				<br />

				<Paper item='true' xs={1} md={8} lg={9} style={{ padding: '8px' }}>
					<Title>Future Features?</Title>
					<p>
						I plan to write an algorithm that analyses tweets based on emotion
						and gather information on how emotion affects popularity. For the
						bot, I plan to have an auto-reply, auto-massage, and an account
						analysis system.
					</p>
				</Paper>
			</Container>
		</div>
	);
}

export default Faq;
