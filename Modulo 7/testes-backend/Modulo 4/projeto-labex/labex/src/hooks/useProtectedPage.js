import { getToken } from "../constants";
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'

export const useProtectedPage=()=>{
	const history=useHistory()

	useEffect(()=>{
		const token=getToken()
		if(!token) history.push('/login')
	},[])
}