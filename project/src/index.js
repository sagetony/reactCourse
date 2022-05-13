import React from 'react';
import ReactDom from 'react-dom';

// const buttonText = () => {
//     return "Click Sage";
// }
const myTime = () =>{
    return (new Date()).toLocaleTimeString()
}
const App = () => {
    // const buttonText = "Click Me";
    return (
        <div>
           <div>Current Time:</div>
            <h3>{myTime()}</h3>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));