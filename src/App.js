import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListUI from "./CardList";
import Home from "./Home";

function App(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<CardListUI/>}/>
        </Routes>
    </BrowserRouter>
);
}
export default App;