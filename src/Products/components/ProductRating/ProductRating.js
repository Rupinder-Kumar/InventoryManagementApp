import React from "react";


const ProductRating = (props) => {
    return (
        <React.Fragment>
            <input onChange={(e) => props.handlechange(e)} value={props.rating ? props.rating : 0} className="form-control custom-input" name="rating" type="number" min="1" max="10" {...props} />
        </React.Fragment>
    )
}

export default ProductRating;