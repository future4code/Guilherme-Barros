import { createContext, useState } from "react"

export const GlobalContext = createContext()
export const GlobalStorage=({children})=>{
	const [searchUser, setSearchUser] = useState("")
	const [user,setUser]=useState()
	const [history,setHistory]=useState(  JSON.parse(localStorage.getItem("searchs"))
   ? JSON.parse(localStorage.getItem("searchs"))
   : [])
	return(
		<GlobalContext.Provider
      value={{
	searchUser, setSearchUser,
	user,setUser,
	history,setHistory
      }}
    >
      {children}
    </GlobalContext.Provider>
	)
}