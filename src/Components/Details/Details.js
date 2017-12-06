import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';

import './Details.css';


class Details extends Component {
    render() {
        return (
            <div>
                <h1>Details</h1>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        animal: state.animal
    }
}

export default connect(mapStateToProps, null) (Details);