import React from 'react';
import ReactDom from 'react-dom';
import SeasonDetail from './SeasonDetail';
import Spinner from './Spinner';

class App extends React.Component{
  state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat : position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message}),   
         )
    }
        renderContent(){
            
                if(this.state.lat && !this.state.errorMessage){
                    return <SeasonDetail latitude = {this.state.lat} />
                    // return <div>Latitude: {this.state.lat}</div>
                }
                if(this.state.errorMessage && !this.state.lat){
                    return <div>Error: {this.state.errorMessage}</div>
                }
                return <Spinner message = "Please accept location" />
        }
            render(){
                return <div className='border red'>{this.renderContent()}</div>;
                
            }
   
}

ReactDom.render(<App />, document.querySelector('#root'));