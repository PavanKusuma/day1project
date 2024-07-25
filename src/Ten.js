import { useState } from "react";

function Ten(){
    const [review, setReview] = useState('');
    const [reviewToDisplay, setDisplay] = useState('');
    const addReview = () => {
        console.log("Adding review...");
        setDisplay(review);
    }
    const inputValueChange = (event) => {
        console.log(event.target.value);
        setReview(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="Enter a review" 
            onChange={inputValueChange}/>
            <button className="btn btn-dark btn-sm" 
            onClick={addReview}>Add review</button>
            <p>{reviewToDisplay}</p>
        </div>
    );
}
export default Ten;