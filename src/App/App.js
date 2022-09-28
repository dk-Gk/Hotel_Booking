import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, HashRouter }
	from 'react-router-dom';
import NewHome from '../Pages/NewHome';
import List from '../Pages/List';
import Hotel from '../Pages/Hotel';
import Register from '../Pages/Register';
import Login from '../Pages/Login';



function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<NewHome />} />
				<Route path='/hotels' element={<List />} />
				<Route path='/hotels/:id' element={<Hotel />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
