import React from 'react'

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2 className='fs-2'>Our Services</h2>
              <p className='fs-5'>A trusted name in providing world-class tech parks for IT companies, Manyata Tech Park <br /> offers a range of services to ensure a thriving and innovative environment.</p>
            </div>
          </div>
        </div>

        {/* First Row of Cards */}
        <div className="row">
          {/* Service 1 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-building"></i>
                <h3 className="card-title">State-of-the-Art Infrastructure</h3>
                <p className="lead">Our tech park features state-of-the-art infrastructure with world-class facilities, ensuring a conducive environment for IT companies to thrive.</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-layout-text-sidebar"></i>
                <h3 className="card-title">Flexible Office Spaces</h3>
                <p className="lead">We offer flexible office spaces tailored to the needs of IT companies, ranging from small startup offices to large corporate suites.</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-shield-lock"></i>
                <h3 className="card-title">24/7 Security & Surveillance</h3>
                <p className="lead">With round-the-clock security and advanced surveillance systems, we ensure a safe and secure working environment for all businesses.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="row mt-4">
          {/* Service 4 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-wifi"></i>
                <h3 className="card-title">High-Speed Internet Connectivity</h3>
                <p className="lead">Our tech park is equipped with high-speed internet connectivity, enabling seamless operations for IT companies and fostering innovation.</p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-tree"></i>
                <h3 className="card-title">Sustainable Green Campus</h3>
                <p className="lead">We are committed to sustainability, with a green campus that includes eco-friendly buildings, energy-efficient systems, and landscaped gardens.</p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-gear"></i>
                <h3 className="card-title">On-Site Amenities</h3>
                <p className="lead">From fitness centers to dining options, our tech park offers a wide range of on-site amenities to enhance the work-life balance of employees.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
