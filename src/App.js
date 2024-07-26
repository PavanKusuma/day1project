import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListUI from "./CardList";
import Home from "./Home";
import { createContext, useState } from "react";
import Profile from "./Profile";

export const globalContext = createContext();
function App(){
    const [globalCount, setGlobalCount]=useState(0);
    const [globalUserObject, setGlobalUserObject] = useState({});
    const [globalIsLogin, setGlobalIsLogin]=useState(false);
return(
    <globalContext.Provider value={{globalCount, setGlobalCount, 
    globalUserObject, setGlobalUserObject, 
    globalIsLogin, setGlobalIsLogin}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<CardListUI/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    </globalContext.Provider>
);
}
export default App;