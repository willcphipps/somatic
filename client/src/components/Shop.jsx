import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashLink as Link } from 'react-router-hash-link';




const Shop = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [cartCheck, setCartCheck] = useState(false);

    

    const getProducts = () => {
        axios.get("http://localhost:8000/api/products") 
          .then(res => {
            setProducts(res.data);
            setLoading(false)
          })
          .catch(err => console.log(err));
      }
    useEffect(() => {
        getProducts();
        let currentCart = localStorage.getItem('cart')
        if (currentCart) {
            setCartCheck(true)
            axios.get(`http://localhost:8000/api/orders/${currentCart}`)
                .then(res => {
                    setShoppingCart(res.data);
                })
        }
    }, []);


    const getProduct = (id) => {
    console.log(id);
        axios.get(`http://localhost:8000/api/products/${id}`) 
          .then(res => {
            console.log(res.data);
              setProduct(res.data);
              showModal()
          })
          .catch(err => console.log(err));
      }
        
    function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }
    // ----------------------- open and close modal ----------------------------
    const showModal = () => {

        let modal = document.getElementById('product-modal');
        modal.classList.add('show');
    }
    const closeModal = () => {
        let modal = document.getElementById('product-modal');
        modal.classList.remove('show');
    }
    // --------------------------------------------------------------------------
    // const addCookie = () => {
    //     const cookies = new Cookies();
    //     let myCookie = uuidv4()
    //     cookies.set('user', myCookie, { path: '/' });
    //     // cookies.set('myCat', 'Pacman', { path: '/' });
    //     console.log(cookies.get('user')); 
    // }

    // --------------------- adding to cart section ------------------------------
    const addCart = (device) => {
        let cart = localStorage.getItem('cart')
        if (cart) {
// axios call to update order object in db for customer who already have cart
            let cartItems = shoppingCart.products;
            let price = shoppingCart.totalPrice + product.price;
            cartItems.push(product)
            let order = { "products":cartItems, 'totalPrice':price }
            axios.put(`http://localhost:8000/api/orders/${cart}`, order) 
            .then(res => {
            console.log(res.data);
            setShoppingCart(res.data);
            })
            .catch(err => console.log(err));
        }
        else {
// creating a new order item if customer does not already have a cart
            let order = { "products":product, "totalPrice":product.price }
            axios.post("http://localhost:8000/api/orders", order) 
            .then(res => {
            console.log(res.data);
            setShoppingCart(res.data);
            localStorage.setItem('cart', res.data._id)
            })
            .catch(err => console.log(err));
        }
    }


    
    return (
        <main>
            {loading ? <h1>Loading...</h1> :
                <div
                    onClick={closeModal}
                    className="shop-wrap">
                    
                    <div className="shop-nav">
                        <div className="brand-cards">
                            <div className="brand-card">
                                <img className="card-img-top" src="/images/slide1.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Pure CBD Tinctures</h4>
                                    <p className="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                    </p>
                                    <Link
                                            to="#shop-beauty" className="btn btn-outline-warning"

                                        >Go to Beauty</Link>
                                </div>
                            </div>
                            
                            <div className="brand-card">
                                <img className="card-img-top" src="/images/slide2.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Topical Mana</h4>
                                    <p className="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                    </p>
                                    <Link
                                            to="#shop-health" className="btn btn-outline-warning"

                                        >Go to Health</Link>
                                </div>
                            </div>
                                    
                            <div className="brand-card">
                                <img className="card-img-top" src="/images/slide3.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Artisan Oils</h4>
                                    <p className="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                    </p>
                                        <Link
                                            to="#shop-energy" className="btn btn-outline-warning"

                                        >Go to Energy</Link>  
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="product-cat-wrap">
                    <h1>Bath and beauty</h1>
                    <p className="product-cat-blurb">Here at somatic hemp, we believe there is a healthy way to embody your perfect self. We see that beauty, true beauty, eminates from within our very core. Our hearts are the center of our myriad refractions into the outer world. As such, we think its best to nurture our bodies, and our hearts, our emotional selves, our very nature, with the best products. Each of our consciously crafted products is the result of careful consideration, honest effort, our commitment to providing you with products that nurture your inner beauty.</p>
                    <div id="shop-beauty" className="shop-category">
                    {products.filter(cat => cat.category == 'beauty').map((item, i) => {
                        return (
                            <div key={item._id}
                                className="product-display">
                                <div className="product-img"> </div> 
                                <h5 className="product-title">{item.title}</h5>
                                <p className="product-price">${item.price.toFixed(2)}</p>
                                <button
                                    onClick={e => getProduct(item._id)}
                                    className="product-button btn btn-block btn-outline-dark">Add To Cart</button>
                            </div>
                        )}
                    )}
                    </div>
                </div>
                    
                    <div className="product-cat-wrap">
                            <h1>health and wellness</h1>
                            <p className="product-cat-blurb">
                                Here at somatic hemp, we take health seriously. It is our highest priority of life. To maintain our own balance, discipline, and trajectory of growth is our perrenial commitment to self. Supporting those around us, with kind words or a helping hand, is the highest service. We made a few products that we believe can help us feel better in our bodies, more empowered in our sense of self. 
                            </p>
                    
                    <div id="shop-health" className="shop-category">
                            {products.filter(cat => cat.category == 'health').map((item, i) => {
                            return(
                                
                        <div key={item._id}
                                className="product-display">
                                <div className="product-img"> </div>
                                <h5 className="product-title">{item.title}</h5>
                                <p className="product-price">${item.price.toFixed(2)}</p>
                                <button 
                                onClick={e => getProduct(item._id)}
                                className="product-button btn btn-block btn-outline-dark">Add To Cart</button>
                            </div>
                            )
                        }
                    )}
                    </div>
                </div>
                <div className="product-cat-wrap">
                    <h1>performance and ballance</h1>
                    <p className="product-cat-blurb">Finding our ability to achieve at our highest possible level is no easy task. Each of us faces a unique set of challenges and difficulties that we must overcome in order to create at our full capacity. Yet it is the jedi of the highest order who can say yes to this challenging task and put forth the commitment effort and discipline necesary to become who you could be. Destiny then, is not predetermined, but is our choice to become. We made a few products that might help in your journey as they have in ours.</p>
                    <div id="shop-energy" className="shop-category">
                        {products.filter(cat => cat.category == 'energy').map((item, i) => {  
                            return (
                                <div key={item._id}
                                className="product-display">
                                <div className="product-img"> </div>
                                <h5 className="product-title">{item.title}</h5>
                                <p className="product-price">${item.price.toFixed(2)}</p>
                                <button 
                                onClick={e => getProduct(item._id)}
                                className="product-button btn btn-block btn-outline-dark">Quick View</button>
                            </div>
                            )}
                        )}
                    </div>
                </div>
                    <div id="product-modal">
                        <div className="modal-text-wrap">
                            <img src="images/dropper1.jpeg" alt="" />
                            <div className="modal-text">
                                <h2>{product.title}</h2>
                                <h4>${product.price}</h4>
                            </div>
                        </div>
                        <p className="modal-product-desc">{product.description}</p>
                        <div className="product-btn-display">
                            <button 
                                onClick={e => addCart(product._id)}
                                className=" btn btn-outline-dark">Add to Cart
                            </button>
                            <button 
                                onClick={e => addCart(product._id)}
                                className=" btn btn-outline-dark">Product Page
                            </button>
                        </div>
                </div>
            </div>
            }
        </main>
    )
}

export default Shop;