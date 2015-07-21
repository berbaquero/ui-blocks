import React from 'react';
import Head from './head';
import Body from './body';

const Root = React.createClass({

	render() {
		return (
			<html>
			<Head title={this.props.title}
				  description={this.props.description}
				  styles={this.props.styles}/>

			<Body scripts={this.props.scripts}>
			{this.props.children}
			</Body>

			</html>
		)
	}
});

export default Root;
