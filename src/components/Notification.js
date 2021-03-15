import React from 'react';
import {
	NotificationContainer,
	NotificationManager,
} from 'react-notifications';

function createNotification(type, message) {
	switch (type) {
		case 'info':
			return NotificationManager.info('Info message');

		case 'success':
			return NotificationManager.success(message, 'Twistify');

		case 'warning':
			return NotificationManager.warning(
				message,
				'Please Try Again!',
				4000
			);

		case 'error':
			return NotificationManager.error(
				'Error message',
				'Click me!',
				5000,
				() => {
					alert('callback');
				}
			);
		default:
			return '';
	}
}


export default createNotification
