import React from 'react'

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="row d-flex align-items-stretch">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-img h-100 w-100 ">
              <img src="../images/img2.jpg" className='img-fluid h-100' alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5  d-flex align-items-center">
            <div className="about-text">
              <h1><span className='text-danger'>At Manyat</span> we are all marching on the path to becoming India’s leading property developer by creating many large townships and tech parks that are innovative and future-ready.</h1>
              <p>Today, we have already delivered a world-class project, high business value and investment returns to our investors and stakeholders. With a promising vision of our leader, we are sure that soon Manyata will be synonymous to every new landmark in the country.</p>
              <a href="" className='btn btn-warning'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
