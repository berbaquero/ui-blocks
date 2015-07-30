import React from 'react';
import request from 'superagent';
import config from './modules/config.js';
import prism from './modules/prism.js';
import CodeBlock from './components/CodeBlock.jsx';
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
				}, thisComponent.prepareCode)
			});
	},

	prepareCode() {
		prism.highlightAll();
	},

	render() {
		if (this.state.files.length > 0) {
			return (
				<div>
					<div className='ui-flx ui-flx-wrap'>
						{this.state.files.map((file, index) => {
							const section = this.state.items[file];
							return (
								<CodeBlock title={file}
										   key={index}>{section.content}</CodeBlock>
							)
						})}
					</div>
				</div>
			)
		} else {
			return (
				<h1 style={{margin: '15em auto', textAlign: 'center'}}
					className='ui-clr-main ui-heading'>Loading</h1>
			)
		}

	}
});

const renderMenu = (files) => {
	React.render(<Menu files={files}/>, document.getElementById('app-menu'));
};

React.render(<Main/>, document.getElementById('app-container'));
