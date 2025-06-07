import { createContext } from "react";


export const AppContext=createContext();


const AppContextProvider=(props)=>{

    const backendUrl="http://localhost:8080/api"
    const contextValue={
        backendUrl

    }



    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;