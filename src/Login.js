import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./Home";

function Login(){
    const collegeIdRef = useRef(null); // reference
    const passwordRef = useRef(null); // reference
    const [loginMessage, setMessage] = useState('');
    const {isLogin, setIsLogin} = useContext(UserContext);

    // use effect to focus on input field
    useEffect(() => {
        collegeIdRef.current.focus();
    });

    const formSubmitted = (event)=> {
        event.preventDefault(); // prevent reload
        if(collegeIdRef.current.value == passwordRef.current.value)
        { 
            setMessage("Correct");
            setIsLogin(true);
         } 
        else { 
            setMessage("Incorrect");
         }
    }
    return(
        <div className="container">
            <div className="card" style={{width:'300px',padding:'20px'}}>
                <h1>Login</h1>
                <p>Enter your details to login</p>
                <form onSubmit={formSubmitted} 
                style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                    <label>CollegeId</label>
                    <input type="text" ref={collegeIdRef}/>
                    <label>Password</label>
                    <input type="password" ref={passwordRef}/>
                    <button type="submit" className="btn btn-dark">Login</button>
                    <p>{loginMessage}</p>
                </form>
            </div>
        </div>
    );
}
export default Login;