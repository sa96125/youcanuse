import React from 'react';
import Routes from '../../router/hot-routes';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Theme from '../../styles/theme';
import GlobalStyles from '../../styles/reset';
import Header from '../header';

const App = () => {
	const isSignedIn = useSelector(state => state.auth.isSignedIn);

	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
				<Header />
				<Routes isSignedIn={isSignedIn} />
		</ThemeProvider>
	);
};

export default App;
