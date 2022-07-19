import React from 'react';
import Main from './views/Main';
import Product from './views/Product';
import Update from './views/Update';
import { Route, Routes } from 'react-router-dom';
function App() {
	
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/product/:id' element={<Product />} />
				<Route path='/product/:id/edit' element={<Update />} />
			</Routes>
		</div>
	);
}
export default App;
