import React from 'react';
import Root from './root';

const Index = React.createClass({

	render() {
		return (
			<Root scripts={['dist/main.js']}
				  styles={['dist/main.css']}
				  title='UI Blocks'>

				<header className='ui-brdr-b ui-brdr-clr-main'>
					<h1 className='ui-nln-b ui-heading'>UI Blocks</h1>

					<a href="https://gist.github.com/berbaquero/453abbd8f6d49afecd16"
					   target="_blank"
					   className='ui-mrgn-x ui-pad-x ui-brdr ui-clr-main'>Source</a>

					<div id='app-menu'
						 className='ui-nln-b ui-mrgn-x'></div>
				</header>

				<div id="app-container"></div>
			</Root>
		)
	}
});

export default Index;
