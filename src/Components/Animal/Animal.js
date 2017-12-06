import React from 'react';
import { Link } from 'react-router-dom';


export default function Animal(props) {
    return (
        <div>
            <h2>animals</h2>
            <Link to='/details'> Details</Link>
            {props.children}
            </div>
    )
}