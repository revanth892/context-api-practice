import { createContext, useContext } from "react";

import {add} from '../utilities/utilities.js'

const Mycontext=createContext(null);

export const useMycontext=()=>useContext(Mycontext);

export const Mycontextprovider =(props)=>{
    const myadder=(a,b)=>{
        return add(a,b);
    }
    return(
        <Mycontext.Provider
            value={{
                myadder,
            }}
        >
            {props.children}
        </Mycontext.Provider>
    )
    
} 