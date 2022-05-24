
import React from "react";

const ImageList = (props) => {
    const Image = props.images.map((img) => {
            return <img src={img.urls.regular} alt={img.description} key={img.id} style={{width: '100%'}} />
    })
    return(
        <div className='image-list'>
           {Image}
        </div>
    )
}

export default ImageList;