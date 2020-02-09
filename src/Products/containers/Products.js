import React, { Component } from "react";
import { connect } from 'react-redux';
import { getProducts, getProductById, addProduct, deleteProduct, updateProduct } from "../store/ProductActions";
import ProductList from "../components/ProductList/ProductList";
import ProductStock from "../components/ProductStock/ProductStock";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import "./Product.scss";

class Products extends Component {

   state = {
    selectedProductId: 1
   }

    selectProduct = (id) => {
        this.setState({
            selectedProductId: id
        })
        this.props.getProductById(id)
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products, addProduct, activeProduct, deleteProduct, updateProduct } = this.props;
        const productCount = products.length;
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <ProductList selectProduct={this.selectProduct} products={products}/>
                    </div>
                    <div className="col-md-8">
                        <ProductStock productCount={productCount}/>
                        <ProductDetail deleteProduct={deleteProduct} updateProduct={updateProduct} selectedProductId={this.state.selectedProductId} activeProduct={activeProduct}  products={products} addProduct={addProduct}/>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    products: state.products.data,
    activeProduct: state.products.activeProduct
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
    getProductById: (id) => dispatch(getProductById(id)),
    addProduct: (payload) => dispatch(addProduct(payload)),
    updateProduct: (id, payload) => dispatch(updateProduct(id, payload)),
    deleteProduct: (id) => dispatch(deleteProduct(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);