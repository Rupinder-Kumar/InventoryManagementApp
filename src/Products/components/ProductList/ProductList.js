import React from "react";

const ProductList = (props) => {
    return (
        <div className="card">
            <h5 className="card-header bg-primary text-white">Products</h5>
            <div className="card-body">
                {props.products && (props.products.length > 0) ?
                <div className="list-group">
                    {props.products.map((product, index) => {
                        return (
                            <button key={product.id} onClick={() => props.selectProduct(product.id)} type="button" className={`list-group-item list-group-item-action ${props.selectedProductId === product.id ? 'active' : ''}`}>{product.name} <span className="float-right">${product.price}</span></button>
                        )
                    })}
                    
                </div>
                :"No Products Available"}
            </div>
        </div>
    )
}

export default ProductList;