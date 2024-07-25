import Five from "./Five";
import Four from "./Four";
import Three from "./Three";
import Two from "./Two";

function One(){

    return (
        <div>
            <h1>This is from a component</h1>
            <img src="atom.png" width={300}/>
            <Two />
            <Three />
            <Four />
            <Five />
        </div>
        );

}

export default One;