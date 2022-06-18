import axios from "axios";
export const url='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/'
export const headers = {
	
	    'Content-Type': 'application/json'
	
      } 
export  const httpClient = axios.create({ baseURL:url, headers });
   