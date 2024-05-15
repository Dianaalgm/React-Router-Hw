import React from "react";
import { Link, Route } from 'react-router-dom';
import ProductInfo from './ProductInfo'


const Product = ({ match }) =>{
    return(
        <div>
            <h2> Product Page </h2>
            <ul>
                <li><Link to ={`${match.url}/1`}> Product One </Link></li>
                <li><Link to ={`${match.url}/1`}> Product Two </Link></li>
                <li><Link to ={`${match.url}/1`}> Product Third </Link></li>
                <li><Link to ={`${match.url}/1`}> Product Four </Link></li>
            </ul>
            <Route path={`${match.path}/:id`} Component={ProductInfo} />
            <Route
            exact
            path={match.path}
            render={() => <p>Please select any product</p>}

            />
        </div>

    )
};

export default Product;