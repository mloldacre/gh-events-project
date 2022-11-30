import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
	return (
		<article className='help-box'>
			<h3>{title}</h3>
			<p>{text}</p>
		</article>
	);
}

HelpBox.propTypes = {
	title: string,
	text: string,
};

export default HelpBox;

//! Adding comments to be ignored by GitHub Actions

// TODO: fix this

// FIX: delete comments

//? Uses [skip actions] in commit message to skip actions of push and pull request triggers
