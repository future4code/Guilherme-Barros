import { useEffect, useState } from "react";
import { api } from "../constants";

const useRequestData=(user)=>{
	const [data,setData]=useState();
	const [isLoading,setIsLoading]=useState(false)
	const [error,setError]=useState()
	useEffect(()=>{
		setIsLoading(true)
		api.get(`/${user.user}`)
		.then(response=>{
			setData(response.data)
			setIsLoading(false)
		}).catch(error=>{
			setError(error)
			setIsLoading(false)
		})
	},[user])
	return [data, isLoading, error];
}
export default useRequestData;