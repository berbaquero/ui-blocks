import React from 'react';

class Menu extends React.Component {

	render() {
		const titles = this.props.files.map((file) => {
			return file.replace('UI-', '').replace('.scss', '');
		});

		return (
			<nav>
				{titles.map((title, index) =>
					<a className='ui-mrgn-x ui-clr-main ui-nln-b'
					   href={'#' + title}
					   key={index}>{title}</a>)
				}
			</nav>
		)
	}
}

export default Menu;