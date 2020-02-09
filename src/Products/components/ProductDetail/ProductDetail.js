import React from "react";
import ProductRating from "../ProductRating/ProductRating";

class ProductDetail extends React.Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.activeProduct.name,
            price: nextProps.activeProduct.price,
            rating: nextProps.activeProduct.rating
        })
    }

    render() {
        const { activeProduct } = this.props;
        return (
            <div className="card">
                <h5 className="card-header bg-primary text-white">Product Details <span className="float-right">{activeProduct.name}  {activeProduct.length === 0 ? `(Product ID - ${activeProduct.id})`: "Add New Product"} </span></h5>
                <div className="card-body">
                    <form method="post" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group mb-4">
                            <label>Name</label>
                            <input onChange={(e) => this.handleChange(e)} className="form-control" value={this.state ? this.state.name : ""} name="name" />
                        </div>
                        <div className="form-group mb-4">
                            <label>Price</label>
                            <input onChange={(e) => this.handleChange(e)} className="form-control" value={this.state ? this.state.price : ""} name="price" />
                        </div>
                        <div className="form-group mb-4">
                            <label>Rating</label>
                            <ProductRating rating={this.state ? this.state.rating : 0} handlechange={this.handleChange} />
                        </div>
                        <div className="btn-inline mt-4 mb-4">
                            <button type="submit" onClick={() => this.props.addProduct(this.state)} className="btn btn-primary">Add</button>
                            <button type="submit" onClick={() => this.props.updateProduct(this.props.selectedProductId, this.state)} className="btn btn-success">Save</button>
                            <button type="submit" onClick={() => this.props.deleteProduct(this.props.selectedProductId)} className="btn btn-danger">Delete</button>
                            <button type="submit" className="btn btn-warning text-white">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductDetail;