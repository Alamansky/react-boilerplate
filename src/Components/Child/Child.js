import style from './Child.css';

import React from 'react';
import ReactDOM from 'react-dom';

//import '../../styles/main.css';

export default function Child(props) {
	return (
		<h1 styleName='header'>{props.props}</h1>
	);
}