/* eslint-disable */
import React from "react"
import "./productPreview.css"

class ProductPreview extends React.Component {
    render() {
        return(
            <div className="product-preview">
                <img src={this.props.src} alt={this.props.alt}/>
                <p>{this.props.title}</p>
                <p>€{this.props.price}.00</p>
                <p>{this.props.stock ? 'In Stock' : 'Sold Out'}</p>
            </div>
        )
    }
}

export default ProductPreview;