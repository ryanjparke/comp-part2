import React, {Component} from 'react';
import './Cart.css';
import {connect} from 'react-redux';


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.cart)
    }

    render() {
        return (
            <div>
                {this.props.cart}
                </div>
        )
    }
}

function mapStateToProps({cart}) {
    return {
        cart
    }
} export default connect(mapStateToProps, null)(Cart);