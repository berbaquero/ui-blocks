import React from 'react';

const CodeBlock = React.createClass({

	selectText(ev) {
		ev.preventDefault();
		const element = ev.target;
		var range, selection;
		if (document.body.createTextRange) {
			range = document.body.createTextRange();
			range.moveToElementText(element);
			range.select();
		} else if (window.getSelection) {
			selection = window.getSelection();
			range = document.createRange();
			range.selectNodeContents(element);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	},

	handleKeyPress(ev) {
		if (ev.which === 13) {
			this.selectText(ev);
		}
	},

	render() {
		const regex = /\..*(\n.*){0,5}}/mg;
		const rawContent = this.props.children;
		const blocks = rawContent.match(regex);
		const title = this.props.title.replace('UI-', '').replace('.scss', '');

		return (
			<div id={title}
				 className='code-block ui-pad-x ui-mrgn-y ui-bbox anim-reveal'>

				<a className='code-block__title ui-link ui-clr-main ui-txt-bld ui-heading'
				   href={'#' + title}>{title}</a>

				{blocks.map((block, index) =>
						(<div tabIndex='2'
							  className='code-block__anchor'
							  key={index}
							  onKeyPress={this.handleKeyPress}>
						 <pre className='code-block__content'
							  onClick={this.selectText}>
							<code className='language-css'>{block}</code>
						</pre>
						</div>)
				)}
			</div>
		)
	}
});

export default CodeBlock;
