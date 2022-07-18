import React from 'react';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
		</div>
	);
}
export default App;
