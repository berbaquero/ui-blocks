import React from 'react';
import Root from './root';

const Index = React.createClass({

	render() {
		return (
			<Root scripts={['dist/main.js']}
				  styles={['dist/main.css']}
				  title='UI Blocks'
				  description='Tiny, reusable CSS utility classes for UI, with a different workflow'>

				<header className='ui-brdr-b ui-brdr-clr-main ui-mrgn-y'
						id='top'>

					<h1 className='ui-nln-b ui-heading'>
						<a href='/'
						   className='ui-link ui-dark'>UI Blocks</a>
					</h1>

					<a href="https://gist.github.com/berbaquero/453abbd8f6d49afecd16"
					   target="_blank"
					   tabIndex='0'
					   className='ui-mrgn-x ui-pad-x ui-brdr ui-clr-main'>Source</a>

					<div id='app-menu'
						 className='ui-nln-b ui-mrgn-x'></div>
				</header>

				<div id="app-container"
					 className='ui-mrgn-y'></div>

				<footer className='ui-flx ui-flx-cntr-y ui-flx-spc-btwn-x ui-brdr-t ui-brdr-clr-main'>
					<h2 className='ui-heading'>UI Blocks</h2>
					<a className='ui-clr-main'
					   href="#top"
					   tabIndex='0'>back to top</a>
					<a href="http://berbaquero.com"
					   className='ui-heading ui-txt-bld ui-link ui-clr-main'
					   tabIndex='0'>Bernardo Baquero Stand</a>
				</footer>
			</Root>
		)
	}
});

export default Index;
