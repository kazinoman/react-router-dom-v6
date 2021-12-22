import React from 'react'
import {useParams} from "react-router-dom"

const ProductDetails = () => {

    const param = useParams()
    console.log(param.pID);
    return (
        <div>
            <h1>Product detail's</h1>
            {param.pID}
        </div>
    )
}

export default ProductDetails
