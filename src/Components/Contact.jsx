import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './contact.css';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 12.9716, // Replace with your company's latitude
    lng: 77.5946, // Replace with your company's longitude
};

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Contact US</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Map Section */}
                <div className="col-lg-6 col-md-12 col-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8701613842554!2d77.61600327381157!3d13.043935513290778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176ddc662065%3A0x57b2874f9023bb8!2sEmbassy%20Manyata%20Business%20Park!5e0!3m2!1sen!2sin!4v1723462770546!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>

                {/* Contact Form Section */}
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
