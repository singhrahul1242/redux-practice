import React from "react";
import mobile from '../mobile.png'
import cart from '../cart.png'

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img height={60} src={cart} />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img height={80} src={mobile} alt="mobile" />
                </div>
                <div className="text-wrapper item">
                    <span>Price : $400</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;