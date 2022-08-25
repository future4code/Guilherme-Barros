import { createContext, useState } from "react"

export const GlobalContext = createContext()
export const GlobalStorage=({children})=>{
	const [searchUser, setSearchUser] = useState("")
	const [user,setUser]=useState()
	return(
		<GlobalContext.Provider
      value={{
	searchUser, setSearchUser,
	user,setUser
      }}
    >
      {children}
    </GlobalContext.Provider>
	)
}