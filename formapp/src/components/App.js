import React from "react";
import unsplash from "../api/unsplash";
import SearchForm from './SearchForm';
import ImageList from './imageList';

class App extends React.Component {

    state = {images: []}
    onSearchSubmit = async (term) => {
      const response =  await unsplash.get('/search/photos', {
        params: {query: term},
        
        });

        this.setState({images : response.data.results});
        // console.log(this.state.images);
    };
    render(){
            return (
                <div className="container ui" style={{ marginTop:'20px' }}>
                    <SearchForm onSubmit={this.onSearchSubmit} />
                    <ImageList images = {this.state.images} />
                    {/* No of Cars: {this.state.images.length} */}
                </div>
        );
    }
  
}

export default App;