import React from 'react';
import request from 'superagent';
import config from './modules/config.js';
import BlockSection from './components/BlockSection.jsx';

const gistID = '453abbd8f6d49afecd16';

const Main = React.createClass({

	getInitialState() {
		return {
			items: {}
		}
	},

	componentDidMount() {
		const thisComponent = this;
		request
			.get(config.baseURL + gistID)
			.end((err, res) => {
				console.log(res);
				thisComponent.setState({
					items: res.body.files
				})
			});
	},

	render() {
		const files = Object.keys(this.state.items);
		const titles = files.map((file) => {
			return file.replace('UI-', '').replace('.scss', '');
		});

		return (
			<div>
				<nav className='ui-mrgn-y'>
					{titles.map(title =>
						<a className='ui-mrgn-x ui-clr-main'
						   href={'#' + title}>{title}</a>)
					}
				</nav>
				<div className='ui-flx ui-flx-wrap'>
					{files.map((file) => {
						const section = this.state.items[file];
						return (
							<BlockSection title={file}>{section.content}</BlockSection>
						)
					})}
				</div>
			</div>
		)
	}
});

React.render(<Main/>, document.getElementById('app-container'));
