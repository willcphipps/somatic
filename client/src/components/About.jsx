import React, { useState } from "react";
// import axios from "axios";
// import { navigate } from "@reach/router";



const About = (props) => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    
    const toggleShow1 = e => {
        if (show1 === true) {
            setShow1(false)
        } else {
            setShow1(true);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(false);
        }
    }
    const toggleShow2 = e => {
        if (show2 === true) {
            setShow2(false)
        } else {
            setShow1(false);
            setShow2(true);
            setShow3(false);
            setShow4(false);
            setShow5(false);
        }
    }
    const toggleShow3=e=>{
        if(show3===true){
            setShow3(false)
        } else {
            setShow1(false);
            setShow2(false);
            setShow3(true);
            setShow4(false);
            setShow5(false);
        }
    }
    const toggleShow4=e=>{
        if(show4===true){
            setShow4(false)
        } else {
            setShow1(false);
            setShow2(false);
            setShow3(false);
            setShow4(true);
            setShow5(false);
        }
    }
    const toggleShow5=e=>{
        if(show5===true){
            setShow5(false)
        } else {
            setShow1(false);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(true);
        }
    }

    return (
        <main>
            <div className="about-wrap">
                {/* <div className="logo-head">
                    <img src="/images/logo.png" alt="Logo" />
                </div> */}
                {/* section for to demonstrate our commitment to sustainable agg */}
                <div className="about-nature">
                    <h4>Salve the planet &trade;</h4>
                    <div className="nature-image"></div>
                    <div class="nature-info">
                        <h3>Natures Healing in Your hands</h3>
                        <p>We started this company in 2018 to bring back sustainable agriculture to an area that has ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate sit iusto quam sapiente nesciunt quas eos vitae, ratione ad odit id voluptas, modi, doloribus quidem nisi repudiandae! Error, beatae maiores. Error enim repellendus praesentium. Dolor obcaecati, soluta consequuntur illo quidem repellat molestias sapiente quis aperiam excepturi voluptatibus a eos rerum debitis aliquam. Beatae itaque, voluptatem odio obcaecati aliquid excepturi reprehenderit id eos temporibus, magnam mollitia fuga distinctio vero, iure rerum! Dignissimos, qui dolor odit obcaecati perspiciatis et aperiam ad, ratione excepturi rerum velit temporibus debitis. Praesentium, magnam veritatis numquam sunt dolor laborum est, eligendi quos voluptatem, alias tenetur ab!</p>
                    </div>
                </div>

                {/* section for logo // icons to visually show our organic / hand crafted / oklahoma grown etc */}
                <div className="about-logos">
                    <div className="logo-info">
                        <h4> good for you and great for the earth</h4>
                        <h3>Hand made with care</h3>
                        <p>here we will put some info about our company. Little tidbits of information that will help us to build our brand identity and add some visual interest to the page.</p>
                    </div>
                    <div className="logo-badges">
                        <div className="logo-badge">
                            <img src="/images/cat.png" alt="" />
                            <p>certified organic</p>
                        </div>
                        <div className="logo-badge">
                            <img src="/images/cat.png" alt="" />
                            <p>lab-tested</p>
                        </div>
                        <div className="logo-badge">
                            <img src="/images/cat.png" alt="" />
                            <p>dog-approved</p>
                        </div>
                    </div>
                </div>
                {/* section to show our commitment to health & wellness */}
                <div className="about-body">
                    <div class="body-info">
                        <h3>Consciously crafted</h3>
                        <p>All of our products are made with care at the Mother Road Market in the heart of Tulsa.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vel eum aperiam excepturi blanditiis omnis, voluptatibus odio iste esse tenetur?!</p>
                    </div>
                    <div className="body-image"></div>
                </div>


                {/* section to answer common questions about our products // brand */}
               
                 <div className="faq-wrap">
                    
                    <div className="about-faq">
                        <div className="accordion" id="faq-accordion">
                        <div className="z-depth-0"  data-toggle="collapse" data-target="#collapseOne2"
                                aria-expanded="true" aria-controls="collapseOne2">
                            <div className="faq-header" onClick={toggleShow1} id="headingOne2">
                            <h5 className="mb-0">
                                {/* toggle a little arrow element to the right of the heading */}
                                FAQ Area
                                {!show1 ? <i className="fa fa-angle-down rotate-icon"></i> : <i className="fa fa-angle-up rotate-icon"></i>}
                            </h5>
                            </div>
                            <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2"
                            data-parent="#faq-accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable.
                            </div>
                            </div>
                        </div>
                        <div className="z-depth-0" data-toggle="collapse"
                                data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                            <div className="faq-header" onClick={toggleShow2} id="headingTwo2">
                            <h5 className="mb-0">
                                {/* toggle a little arrow element to the right of the heading */}
                                FAQ Area.
                                {!show2 ? <i className="fa fa-angle-down rotate-icon"></i> : <i className="fa fa-angle-up rotate-icon"></i>} 
                            </h5>
                            </div>
                            <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2"
                            data-parent="#faq-accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable.
                            </div>
                            </div>
                        </div>
                        <div className="z-depth-0"  data-toggle="collapse" data-target="#collapseThree2"
                                aria-expanded="true" aria-controls="collapseThree2">
                            <div className="faq-header" onClick={toggleShow3} id="headingOne2">
                            <h5 className="mb-0">
                                FAQ Area
                                {/* toggle a little arrow element to the right of the heading */}
                                
                            {!show3 ? <i className="fa fa-angle-down rotate-icon"></i> : <i className="fa fa-angle-up rotate-icon"></i>}
                            </h5>
                            </div>
                            <div id="collapseThree2" className="collapse" aria-labelledby="headingThree2"
                            data-parent="#faq-accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable.
                            </div>
                            </div>
                        </div>
                            
                        <div className="z-depth-0"  data-toggle="collapse" data-target="#collapseFour2"
                                aria-expanded="true" aria-controls="collapseFour2">
                            <div className="faq-header" onClick={toggleShow4} id="headingOne2">
                            <h5 className="mb-0">
                                FAQ Area
                            {!show4 ? <i className="fa fa-angle-down rotate-icon"></i> : <i className="fa fa-angle-up rotate-icon"></i>}
                            </h5>
                            </div>
                            <div id="collapseFour2" className="collapse" aria-labelledby="headingFour2"
                            data-parent="#faq-accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable.
                            </div>
                            </div>
                        </div>
                            {/* faq-section */}
                        <div className="z-depth-0"  data-toggle="collapse" data-target="#collapseFive2"
                                aria-expanded="true" aria-controls="collapseFive2">
                            <div className="faq-header" onClick={toggleShow5} id="headingOne2">
                            <h5 className="mb-0">
                                FAQ Area
                            {!show5 ? <i className="fa fa-angle-down rotate-icon"></i> : <i className="fa fa-angle-up rotate-icon"></i>}
                            </h5>
                            </div>
                            <div id="collapseFive2" className="collapse" aria-labelledby="headingFive2"
                            data-parent="#faq-accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable.
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            {/* --------- end of faq-wrap --------- */}



            </div>
        </main>    
    );
}

export default About;