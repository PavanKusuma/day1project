import { createContext, useState } from "react";
import Onboard from "./Onboard";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

export const UserContext = createContext(); // create context
function Home(){
    const [isLogin, setIsLogin]=useState(false);
    const [globalCount, setGlobalCount]=useState(5);
    return(
        <UserContext.Provider 
        value={{isLogin, setIsLogin}}>
            <div>
            {
                isLogin ? <Welcome /> : <Onboard />
            }
            </div>
        </UserContext.Provider>
    );
}
export default Home;