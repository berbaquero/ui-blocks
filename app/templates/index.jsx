import React from 'react';
import Root from './root';

const Index = React.createClass({

	render() {
		return (
			<Root scripts={['dist/main.js']}
				  styles={['dist/main.css']}
				  title='UI Blocks'>
				<h1>UI Blocks</h1>
				<div id="app-container"></div>
			</Root>
		)
	}
});

export default Index;
