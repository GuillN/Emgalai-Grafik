/* eslint-disable */
import React from "react"
import ProductPreview from "./productPreview";
import "./shop.css"
import Godflesh from "../../images/godflesh.jpg"
import Doomer from "../../images/doomer.jpg"
import Nav from "../nav/Nav";
import Footer from "../footer/footer";

class Shop extends React.Component {
    render() {
        return(
            <div className="products">
                <Nav/>
                <ProductPreview src={Doomer} alt="doomer_img" title="TITS SHIRT - Ok Doomer" price={15} stock={true}/>
                <ProductPreview src={Godflesh} alt="godflesh_img" title='Godflesh "Selfless" Gig poster' price={25} stock={true}/>
                <ProductPreview src="tshirt1" alt="gate_img" title="Ëmgalaï's Gate Shirt" price={20} stock={true}/>
                <ProductPreview src="tshirt1" alt="gate_img" title="Conan Gig poster" price={30} stock={false}/>
                <ProductPreview src="tshirt1" alt="gate_img" title="Darkspace Shirt" price={15} stock={true}/>
                <ProductPreview src="tshirt1" alt="gate_img" title="Rock In Bourlon limited Tshirt" price={10} stock={true}/>
                <ProductPreview src="tshirt1" alt="gate_img" title="Sunn O))) @Paradiso, Amsterdam" price={30} stock={false}/>
                <Footer/>
            </div>
        )
    }
}

export default Shop;