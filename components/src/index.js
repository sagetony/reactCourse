import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "@faker-js/faker";
import ApproveDetail from './ApproveDetail';


const App =  () => {
    return (
       
        <div className="ui comments container">
            <ApproveDetail>
                <CommentDetail  
                        author="Sage"
                        timeblog="6:20pm" 
                        image={faker.image.avatar()} 
                /> 
            </ApproveDetail>
            <ApproveDetail>
                <CommentDetail  
                        author="Same"
                        timeblog="6:20pm" 
                        image={faker.image.avatar()} 
                /> 
            </ApproveDetail>
            <ApproveDetail>
                <CommentDetail  
                        author="Tony"
                        timeblog="6:20pm" 
                        image={faker.image.avatar()} 
                /> 
            </ApproveDetail>
           

        </div>

    );
}

ReactDom.render(<App />, document.querySelector('#root'));