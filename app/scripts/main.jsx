import React from 'react';
import request from 'superagent';
import config from './modules/config.js';
import BlockSection from './components/BlockSection.jsx';
import Menu from './components/Menu.jsx';

const Main = React.createClass({

	getInitialState() {
		return {
			items: {},
			files: []
		}
	},

	componentDidMount() {
		const thisComponent = this;
		request
			.get(config.baseURL + config.gistID)
			.end((err, res) => {
				const files = Object.keys(res.body.files);
				renderMenu(files);
				thisComponent.setState({
					items: res.body.files,
					files: files
				})
			});
	},

	render() {


		return (
			<div>
				<nav className='ui-mrgn-y'>

				</nav>
				<div className='ui-flx ui-flx-wrap'>
					{this.state.files.map((file, index) => {
						const section = this.state.items[file];
						return (
							<BlockSection title={file}
										  key={index}>{section.content}</BlockSection>
						)
					})}
				</div>
			</div>
		)
	}
});

const renderMenu = (files) => {
	React.render(<Menu files={files}/>, document.getElementById('app-menu'));
};

React.render(<Main/>, document.getElementById('app-container'));
