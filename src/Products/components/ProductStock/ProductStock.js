import React from "react";

const ProductStock = (props) => {
    return (
        <div className="alert alert-secondary text-center" role="alert">
           <b>Product Count: </b> {props.productCount}    
        </div>
    );
}

export default ProductStock;