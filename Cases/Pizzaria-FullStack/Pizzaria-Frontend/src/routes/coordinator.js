export const goToHomePage=(navigate)=>{
	navigate("/home")
}
export const goToLoginPage=(navigate)=>{
	navigate("/")
}
export const goToCartPage=(navigate)=>{
	navigate('/cart')
}
export const goToOrderPage=(navigate)=>{
	navigate("/order")
}
export const goToPizzaDetails=(navigate,id)=>{
	navigate(`/pizza/${id}`)
}