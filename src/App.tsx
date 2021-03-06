import React from 'react';
import './App.css';

import RouterConfig from 'src/router/routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<RouterConfig />
		</BrowserRouter>
	);
}

export default App;
