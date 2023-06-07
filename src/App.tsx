/** @format */

import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'

function App() {
	return (
		<div>
			welcome
			<NavLink to='/home'>Home</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	)
}

export default App
