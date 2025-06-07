import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";


export const AppContext=createContext();


const AppContextProvider=(props)=>{

    const backendUrl="http://localhost:8080/api"
    const[credit,setCredit]=useState(false);

   const{getToken}= useAuth();

    const loadUserCredits=async()=>{
        try {
            const token=await getToken();
           const response= await axios.get(backendUrl+"/users/credits", { headers: { Authorization: `Bearer ${token}` } })
            if(response.data.success)
            {
                setCredit(response.data.data.credits)
            }
            else{
                toast.error(response.data.data);
            }
            
        } catch (error) {
            console.log(error)
            toast.error("Error Loading Credits");
            
        }
    }

    const contextValue={
        backendUrl,credit,setCredit,loadUserCredits

    }



    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;