import React from 'react';

const CodeBlock = React.createClass({

	selectText(ev) {
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
					(<pre key={index}
						  onClick={this.selectText}
						  className='code-block__content'>
						<code className='language-css'>{block}</code>
					</pre>
					))}
			</div>
		)
	}
});

export default CodeBlock;
