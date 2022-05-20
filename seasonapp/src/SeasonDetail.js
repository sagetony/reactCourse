import React from "react";

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
       return lat > 0 ? 'summer': 'winter';
    }else{
        return lat > 0 ? 'winter': 'summer';
    }
}
const SeasonDetail = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth() );
    const text = season === 'winter' ? 'It is Blurry' : 'Omo hit the beach';

        return (
            <div>
                <h1>{text}</h1>
            </div>
        );
}

export default SeasonDetail;