import { createContext, useContext, useState } from "react";
import Onboard from "./Onboard";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import { globalContext } from "./App";

// export const UserContext = createContext(); // create context
function Home(){
    // const [isLogin, setIsLogin]=useState(false);
    const {globalIsLogin, setGlobalIsLogin} = useContext(globalContext);
    
    return(
       
            <div>
            {
                globalIsLogin ? <Welcome /> : <Onboard />
            }
            </div>
    );
}
export default Home;