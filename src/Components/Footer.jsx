import React from 'react';
import './footer.css'; // Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer mt-5 ">
      <div className="footer-content">
        <div className="footer">
        <a className="navbar-brand fs-2" href="#"><span className='text-warning '>Manyata</span> TechPark</a>
          <p className='mt-3'>With over 40 years of extensive experience, <br />knowledge, strength in land procurement, informed <br /> perspectives in real estate and infrastructure industry, <br /> Manyata has promoted and developed more than <br />330 acres of Integrated communities, while more <br /> than 800 acres is under planning and development.</p>
          <button className="btn btn-danger ">Read More...</button>
        </div>
        <div className="footer  mt-2">
          <ul className="footer-menu ">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">History Of Manyata</a></li>
            <li><a href="#contact">Manyata Tech Park</a></li>
            <li><a href="#contact">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer  ">
          <h1 className='fs-3'><span className='text-warning'>CORPORATE</span> OFFICE</h1>
          <h3 className='fs-5'>MANYATA DEVELOPERS PVT. LTD</h3>
          <p>9/1, 2nd Floor, Classic Court Richmond Road, Bangalore. 560025</p>
          <ul className="footer-contact">
            <li>Corporate Office: <span className='text-mobile'> 080 40480800</span></li> 
            <li>Write us: <a href="mailto:info@manyata.co.in">info@manyata.co.in</a></li>
            <li>For Queries on Morefields: <span className='text-mobile'>9900 731 731</span></li>
            <li>For Queries on Midlands: <span className='text-mobile'>9164 422 422</span></li>
            <li>For Queries on Earthsong: <span className='text-mobile'>9900 977 977</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom mt-5">
        <hr className="footer-line " />
        <p className="footer-copyright text-center fs-5">All Rights Reserved © 2021 Manyata TechPark.</p>
      </div>
    </footer>
  );
}

export default Footer;
