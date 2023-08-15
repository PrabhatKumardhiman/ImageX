import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = (props) => {
    let { imgUrl } = props
    return (
        <div>
            <div className="card mb-3" style= {{border: "none"}}>
                <LazyLoadImage  effect = "blur" src={imgUrl} className=" shadow bg-body-tertiary rounded" alt="..." style = {{width : "100%"}}  />
            </div>
        </div>
    )
}

export default Image
