import React, { useState, useEffect } from "react";
import axios from 'axios';


const Cart = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState()

useEffect(() => {
        let currentCart = localStorage.getItem('cart')
        if (currentCart) {
            axios.get(`http://localhost:8000/api/orders/${currentCart}`)
                .then(res => {
                    setCart(res.data)
                    setProducts(res.data.products);
                    setPrice(res.data.totalPrice);
                })
                .catch(err => console.log(err));
        }   
    }, [cart]);
    
    const removeItem = (e, index) => {
        e.preventDefault();
        console.log(cart)
        let id = localStorage.getItem('cart');
        let prodArr = products;
        let productPrice = products[index].price;
        let newPrice = cart.totalPrice - productPrice;
        prodArr.splice(index, 1);
        let order = { 'products': prodArr, 'totalPrice':newPrice };
        axios.put(`http://localhost:8000/api/orders/${id}`, order)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }
    const showModal = () => {
        let modal = document.getElementById('checkout-modal');
        modal.classList.add('show');
    }
    const hideModal = () => {
        let modal = document.getElementById('checkout-modal');
        modal.classList.remove('show');
    }

    return (
       
        <main>
            <div className="cart-wrap">
                {cart ? 
                    <>
                    <div className="cart-table">
                       <table className="table table-striped ">

                            {products.map((item, i) => 
                                <tr key={i}>
                                    <td><img src={`/images/${item.image}`} alt="" height='75px'/></td>
                                    <td >{item.title}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={e => removeItem(e, i)} className="btn btn-outline-danger">remove</button></td>
                                </tr>
                            )}  
                        </table>
                    </div>
                        <button onClick={showModal} className="btn btn-outline-success">checkout ${price}</button>
                    </>
                    :
                    <h2>this is not the cart your looking for</h2>
                }
                <div id="checkout-modal">
                    <button onClick={hideModal} className="close">&times;</button>
                    <div id="form-container">
                        <div id="sq-card-number"></div>
                        <div className="third" id="sq-expiration-date"></div>
                        <div className="third" id="sq-cvv"></div>
                        <div className="third" id="sq-postal-code"></div>
                        <div className="third" id="email"></div>
                        <div className="third" id="address"></div>
                        <div className="thrid" id="city"></div>
                        <div className="third" id="state"></div>
                        <div className="third" id="postal"></div>
                        <button id="sq-creditcard" className="button-credit-card" onClick={e => window.onGetCardNonce(e, price)}>Pay ${price}</button>
                    </div>
                    
                </div>
            </div>

        </main>
    )
}

export default Cart
