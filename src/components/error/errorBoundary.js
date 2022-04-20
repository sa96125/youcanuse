import React from 'react';
import BlueScreen from './blueScreen';

class ErrorBoundary extends React.Component {
	state = { error: null };

	componentDidCatch = () => {
		this.setState({ error });
		console.error({ error });
	};

	render() {
		const { error } = this.state;
		const { fallbackComponent: FallbackComponent = null, children } =
			this.props;

		if (error) {
			if (this.props.fallbackComponent) {
				return <FallbackComponent />;
			}

			if (!this.props.fallbackComponent) {
				return null;
			}

			return <BlueScreen />;
		}

		return children;
	}
}

export default ErrorBoundary;
