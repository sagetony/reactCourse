import React from "react";
import SearchForm from './SearchForm';

class App extends React.Component {

    onSearchSubmit = (term) => {
        console.log(term)
    };
    render(){
            return (
                <div className="container ui" style={{ marginTop:'20px' }}>
                    <SearchForm onSubmit={this.onSearchSubmit} />
                </div>
        );
    }
  
}

export default App;