import React, { Component } from 'react';

import Header from './components/Header/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<ImageGrid />
			</div>
		);
	}
}

export default App;
