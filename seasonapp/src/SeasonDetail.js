import './SeasonDetail.css';
import React from "react";

const seasonConfig = {
    summer:{
        text: 'Omo hit the beach',
        iconName: 'sun',
    },
    winter:{
        text: 'It is Blurry',
        iconName: 'snowflake',
    }
}
const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
       return lat > 0 ? 'summer': 'winter';
    }else{
        return lat > 0 ? 'winter': 'summer';
    }
}
const SeasonDetail = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth() );  
    const {text, iconName} = seasonConfig[season];
        return (
            <div className={`season-display ${season}`}>
                <i className={`${iconName} icon massive icon-left`}></i>
                <h1>{text}</h1>
                <i className={`${iconName} icon massive icon-right`}></i>

            </div>
        );
}

export default SeasonDetail;