import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {
	NotificationContainer,
	NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';







function App() {
	return (
		<BrowserRouter>
			<NotificationContainer />
			<Dashboard />
		</BrowserRouter>
	);
}

export default App;
