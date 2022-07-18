import React from 'react';
import Main from './views/Main';
import Product from './views/Product';
import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/product/:id' element={<Product />} />
			</Routes>
		</div>
	);
}
export default App;
