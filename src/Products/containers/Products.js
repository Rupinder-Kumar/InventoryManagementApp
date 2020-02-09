import React, { Component } from "react";
import { connect } from 'react-redux';

class Products extends Component {
    
    componentDidMount() {
        // this.props.getEmployees();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    // error: state.dashboard.error,
    // employees: state.dashboard.data
});

const mapDispatchToProps = dispatch => ({
    // getEmployees: () => dispatch(getEmployees())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);