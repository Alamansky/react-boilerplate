import React from 'react';
import ReactDOM from 'react-dom';

import Child from './../Child/Child.js';

import 'normalize.css';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			init: 'React here!'
		};
	}
	render() {
		return (
			<Child props={this.state.init} />
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));