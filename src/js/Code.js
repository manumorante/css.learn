import React from "react";
import hljs from 'highlight.js/lib/highlight';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);
import 'highlight.js/styles/atom-one-dark.css';

export class Code extends React.Component {
	constructor(props) {
		super(props);
		this.code = React.createRef();
		this.myEditStep = this.myEditStep.bind(this);
	}

	myEditStep(e) {
		this.props.editStep(e.target.textContent);
	}

	componentDidMount() {
		hljs.highlightBlock(this.code.current);
	}

	componentDidUpdate() {
		hljs.highlightBlock(this.code.current);
	}

	render() {
		return (
			<pre>
				<code
					ref={this.code}
					onBlur={this.myEditStep}
					className="code css"
					contentEditable="true"
					suppressContentEditableWarning="true"
					autoCorrect="off"
					autoComplete="off"
					autoCapitalize="off"
					spellCheck="false">{this.props.css}</code>
			</pre>
		);
	}
}
