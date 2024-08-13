import React from 'react'
import "./project.css"

const Projects = () => {
    return (
        <section id="portfolio" className="portfolio section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center pb-5">
                            <h2 className='fs-1'>Our Projects</h2>
                            <p className='fs-5'>At Earthsong, we bring balance to nature and urban living, we bring you the best of both worlds.
                                <br /> Live in a place where you can breathe in clean air, access abundant fresh water 
                                 and actually  <br /> feel a stark temperature drop with all the greenery around along with the  
                                 necessary <br />  urban amenities you need. And all it takes is a 30-minute drive from the City Center.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Project 1 */}
                    <div className="col-12 col-md-12 col-lg-4 d-flex align-items-stretch">
                        <div className="card text-center bg-white pb-2">
                            <div className="card-body text-dark">
                                <div className="img-areas mb-4 position-relative">
                                    <img src="../images/project1.jpg" alt="" className='img-fluid' />
                                    <div className="overlay">
                                        <div className="text">Manyata Midlands <br /> Discover the Future of Living</div>
                                    </div>
                                </div>
                                <h3 className="card-title">Manyata Midlands</h3>
                                <p>Manyata Midlands is a residential offering that’s a class apart from the rest & future-ready in all aspects. Spread over 30 acres, this exceptional plotted community provides a varied range of 485 vaastu compliant plots.</p>
                                <button className="btn bg-warning text-dark">Read More</button>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-12 col-md-12 col-lg-4 d-flex align-items-stretch">
                        <div className="card text-center bg-white pb-2">
                            <div className="card-body text-dark">
                                <div className="img-areas mb-4 position-relative">
                                    <img src="../images/project2.jpg" alt="" className='img-fluid' />
                                    <div className="overlay">
                                        <div className="text">Earthsong by Manyata <br /> Phase 4 Launching soon!</div>
                                    </div>
                                </div>
                                <h3 className="card-title">Earthsong by Manyata</h3>
                                <p>Earthsong by Manyata is an ode to bring back the old green charm of Bangalore. Sprawled across 120 acres of greenery with 16000 trees, the project is designed to revive the garden city we all know and love to live in.</p>
                                <button className="btn bg-warning text-dark">Read More</button>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-12 col-md-12 col-lg-4 d-flex align-items-stretch">
                        <div className="card text-center bg-white pb-2">
                            <div className="card-body text-dark">
                                <div className="img-areas mb-4 position-relative">
                                    <img src="../images/project3.jpg" alt="" className='img-fluid' />
                                    <div className="overlay">
                                        <div className="text">Manyata Tech Park <br /> A Visionary Project</div>
                                    </div>
                                </div>
                                <h3 className="card-title">Manyata Tech Park</h3>
                                <p>Manyata Tech Park is our award-winning flagship project that is the brainchild of Reddy Veeranna. Envisioned in the 90s, this fully integrated township is the result of Veeranna’s futuristic thinking.</p>
                                <button className="btn bg-warning text-dark">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
