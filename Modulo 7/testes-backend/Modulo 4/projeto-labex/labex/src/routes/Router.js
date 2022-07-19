import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../component/Header"
import AdminHomePage from "../pages/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage"
import HomePage from "../pages/HomePage"
import ListTripsPage from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage"

export const Routes = ()=>{
	return(
	<BrowserRouter>

	<Header />
	<Switch>
		<Route exact path={'/'}>
			<HomePage/>
		</Route>
		<Route exact path={'/trips'}>
		<ListTripsPage/>
		</Route>
		<Route exact path={'/application/:trip'}>
			<ApplicationFormPage/>
		</Route>
		<Route exact path={'/login'}>
			<LoginPage/>
		</Route>
		<Route exact path={'/admin/trips/list'}>
			<AdminHomePage/>
		</Route>
		<Route exact path={'/admin/trips/create'}>
			<CreateTripPage/>
		</Route>
		<Route exact path={'/admin/trips/:id'}>
			<TripDetailsPage/>
		</Route>
		
	</Switch>
	</BrowserRouter>
	)
}