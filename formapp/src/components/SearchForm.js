import React from "react";

class SearchForm extends React.Component{
    state = {textValue: ''};
    
     onSubmitForm = (event) => {
            event.preventDefault();

            this.props.onSubmit(this.state.textValue);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
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