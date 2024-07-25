import Nine from "./Nine";

function CardUI(props){
    
const width = 300;
    return(
        <div className="card" style={{width:'350px'}}>
            <img src="/atom.png" width={300} 
            style={{border:'10px solid #FF0000',borderRadius:'50px'}}/>
            
            <div className="card-body">
                <h1>{props.userFromArray}</h1>
                <h2>{props.user.branch}</h2>
                <h3>Year: {props.user.year}</h3>
                {/* <button type="button" class="btn btn-primary">Connect</button> */}
                <Nine/>
            </div>
            {/* <h1>{props.program}</h1>
            <h2>{props.col}</h2> */}
        </div>
    );
}
export default CardUI;