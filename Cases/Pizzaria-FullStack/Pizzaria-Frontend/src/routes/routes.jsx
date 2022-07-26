import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStorage } from "../GlobalContext"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Order } from "../pages/Order"
import { OrderDetails } from "../pages/OrderDetails"
import { PizzaCreate } from "../pages/PizzaCreate"
import { PizzaDetails } from "../pages/PizzaDetails"
import { Signup } from "../pages/Signup"

export const ConfigRoutes=()=>{
	return(
		<BrowserRouter>
		<GlobalStorage>
		<Routes>
			<Route path="/" element={<Login/>}/>
			<Route path="/signup" element={<Signup/>}/>
			<Route path="/home" element={<Home/>}/>
			<Route path="/cart" element={<Cart/>}/>
			<Route path='/order' element={<Order/>}/>
			<Route path='/order/:id' element={<OrderDetails/>}/>
			<Route path="/pizza/:id" element={<PizzaDetails/>}/>
			<Route path='/pizza/create' element={<PizzaCreate/>}/>
			
		</Routes>
		</GlobalStorage>
	</BrowserRouter>
	)
}