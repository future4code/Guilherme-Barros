import { createContext, useState } from "react"

export const GlobalContext = createContext()
export const GlobalStorage=({children})=>{
	const [searchPizza, setSearchPizza] = useState("")
	const [sortParameter, setSortParameter] = useState("menor-preco")
	return(
		<GlobalContext.Provider
      value={{
        searchPizza,
        setSearchPizza,
        sortParameter,
        setSortParameter,
      }}
    >
      {children}
    </GlobalContext.Provider>
	)
}