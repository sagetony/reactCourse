import React from "react";

class SearchForm extends React.Component{
    state = {textValue: ''};
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" name="first-name" value={this.state.textValue} onChange={ e => this.setState({textValue: e.target.value})}/>
                    </div>
                   
                    </form>
            </div>
        );
    };
}

export default SearchForm;