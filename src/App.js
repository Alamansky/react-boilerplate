import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

const App = () => {
	return (
		<div>
			<p>React here!</p>
		</div>
	);
};
export default App;
ReactDOM.render(<App />, document.getElementById('app'));