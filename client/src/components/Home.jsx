import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import scroll from 'smoothscroll-polyfill';

const Home = () => {
    return (
        <>
        <main>
            <div className="home">
                {/* <div className="logo-head">
                    <img src="/images/logo.png" alt="Logo"/>
                </div> */}
                    {/* short cut images of newest products */}
                <div className="sales-container">
                   
                </div>
                    {/*  section for marketing materials  */}
                    
                <div className="marketing-container">
                    <div className="content">
                        <h2>Hello from content</h2>
                        <p>Some cool products for some cool cats. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eveniet.</p>
                        <button className="btn btn-warning">Press Me!</button>
                    </div>
                </div>
                    {/* news article */}
                    <div className="news-article">
                        <div className="news-image">
                            {/* <img src="/images/lab.jpg" alt=""/> */}
                        </div>
                        <div className="news-text">
                            <img src="/images/tulsaWorld.jpeg" alt=""/>
                            <h2>Industrial hemp has potential to be a big cash crop for area farmers</h2>
                            <p>The majority of the buzz around the cannabis sativa plant in Oklahoma is focused on the legalization of medical marijuana.
                            Overshadowed are the steps at the federal and state levels to allow the cultivation and interstate trading of industrial hemp, something that could provide an alternative crop, and financial relief, to area farmers.
                            Industrial hemp was farmed quite successfully in Oklahoma during the 1940s, and many are seeing the potential for the state to be a major player in the industry....<a href="https://www.tulsaworld.com/business/industrial-hemp-has-potential-to-be-a-big-cash-crop-for-area-farmers/article_b6b1549a-b1bb-5059-8106-3e9be291bf7f.html"> {" "}Read more</a></p>
                        </div>
                    </div>
                
                    {/* section for branding materials */}
                <div className="branding-container">
                    <div className="content">
                        <h2>Hello from content</h2>
                        <p>Some cool products for some cool cats. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eveniet.</p>
                        <button className="btn btn-outline-warning">Press Me!</button>
                    </div>
                    </div>
                    {/* information blurb */}
                <div className="information">
                    <p><span>Hello there</span></p>
                    <h4>This is some branding information</h4>
                    <p>This is one more p tag Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati numquam voluptatibus enim libero voluptatum non corporis recusandae molestiae facere suscipit possimus harum quaerat dolorum excepturi, quo iste odio molestias.</p>
                </div>
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
                                to="/shop#shop-beauty" className="btn btn-outline-warning"
                                scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                            >Go to Beauty</Link>
                    </div>
                </div>
                
                <div className="brand-card">
                    <img className="card-img-top" src="/images/slide2.jpeg" alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-title">Skin Salves and Muscle Rubs</h4>
                        <p className="card-text">
                        Some quick example text to build on the card title
                        and make up the bulk of the card's content.
                        </p>
                        <Link
                                to="/shop#shop-health" className="btn btn-outline-warning"
                                scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
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
                                to="/shop#shop-energy" className="btn btn-outline-warning"
                                scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                            >Go to Energy</Link>  
                    </div>
                </div>
            </div>
          </div>
       </main>
       </>
    )
}


// const style={backGroundImage: "url('/images/dropper1.jpeg')"}
export default Home
