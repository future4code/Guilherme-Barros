import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GlobalStorage } from '../GlobalContext'
import { History } from '../pages/History'
import { Home } from '../pages/Home'

export const Router = () => {
  return (
	<BrowserRouter>
	<GlobalStorage>
	
	<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path='/historico' element={<History/>}/>
	</Routes>
	</GlobalStorage>
</BrowserRouter>
  )
}
