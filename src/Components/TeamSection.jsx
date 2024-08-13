import React from 'react'
import "./teamsection.css"

const TeamSection = () => {
    return (
        <section className="team section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center pb-5">
                            <h2>Our Teams</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequuntur quisquam totam minus error vitae fugiat.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="img-area">
                                    <img src="../images/saurav.jpg" alt='' className="img-fluid rounded-circle" />
                                </div>
                                <p className='position text-center'>CEO</p>
                                <h3 className="card-title py-2">Sauarv Bir</h3>
                                <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium quaerat praesentium ipsam magnam quo.</p>
                                <p className="social">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-github text-dark mx-1"></i>
                                    <i className="bi bi-envelope text-dark mx-1"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="img-area">
                                    <img src="../images/team4.avif" alt='' className="img-fluid rounded-circle" />
                                </div>
                                <p className='position text-center text-uppercase'>Co-Founder</p>
                                <h3 className="card-title py-2">Amit Kumar</h3>
                                <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium quaerat praesentium ipsam magnam quo.</p>
                                <p className="social">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-github text-dark mx-1"></i>
                                    <i className="bi bi-envelope text-dark mx-1"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="img-area">
                                    <img src="../images/team2.jpg" alt='' className="img-fluid rounded-circle" />
                                </div>
                                <p className='position text-center text-uppercase'>Director</p>
                                <h3 className="card-title py-2">Shabana Khan</h3>
                                <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium quaerat praesentium ipsam magnam quo.</p>
                                <p className="social">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-github text-dark mx-1"></i>
                                    <i className="bi bi-envelope text-dark mx-1"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="img-area">
                                    <img src="../images/team1.jpg" alt='' className="img-fluid rounded-circle" />
                                </div>
                                <p className='position text-center text-uppercase'>Manager</p>
                                <h3 className="card-title py-2">Rose Tailer</h3>
                                <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium quaerat praesentium ipsam magnam quo.</p>
                                <p className="social">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-github text-dark mx-1"></i>
                                    <i className="bi bi-envelope text-dark mx-1"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;
