import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="contact">
        {/* <p>CONTACT US</p> */}
        <p>+1(918) 289 - 1171</p>
        <p>hello@somatichemp.com</p>
      </div>
        <div className="copyright">
          {/* <p><i className="fa fa-map-marker"></i> TULSA, OKLAHOMA</p> */}
          {/* <p>&copy; 2020 Somatic Hemp</p> */}
        </div>
      <div className="address">
          <p>somatic hemp</p>
          <p>1124 S Lewis Ave,</p>
          <p> <i className="fa fa-map-marker"></i> Tulsa, OK 74104</p>
          <p>&copy; 2020 Somatic Hemp</p>
        </div>
    </div>
  );
};

export default Footer;
