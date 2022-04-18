import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Router, Link, NavLink
} from "react-router-dom"
import { useSelector } from "react-redux";


const ProductComponent = ({products}) => {

    console.log("sjhhjjh",products)

    if (!products)
        return <React.Fragment/>

    const renderList = products.map((product, i) => {
        const { id, title, image, price, category } = product;

        return (

                <div className="col-6 col-md-4" key={id}>
                    <Link to={`/product/${id}`}>
                        <div className="thumbnail">
                            <img src={image} alt={title} style={{width:200,objectFit:'contain',height:200}}/>
                            <div className="caption">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </Link>
                </div>

        );
    })
    return (
        <div className={"d-flex flex-wrap"}>
            {renderList}
        </div>
    );
};

export default ProductComponent;