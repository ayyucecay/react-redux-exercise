import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { ActionTypes } from "../redux/constants/action-types";

const ProductListing = () => {
    const [products,setProducts] = useState()
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                dispatch( {
                    type: ActionTypes.PRODUCTS_ERROR,
                    payload: err,
                })
                console.log("Err", err);
            });
        setProducts(response.data)
        console.log(response.data);

    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);
    return (
        <div className="container">
            <ProductComponent products={products} />
        </div>
    )
}

export default ProductListing;