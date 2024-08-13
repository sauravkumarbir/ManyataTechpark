import React from 'react'


const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={`${process.env.PUBLIC_URL}/images/img1.webp`}  class="d-block w-100" alt="..." />
                    <div class="carousel-caption ">
                        <h5>Manayata Tech Park</h5>
                        <p>Manyata Techpark is an award-winning flagship project, planned as a cohesive township at North Bangalore with commercial, residential, hospitality & retail</p>
                        <p><a href="" className='btn btn-warning mt-3'>Learn More</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/images/img2.jpg`}  class="d-block w-100" alt="..." />
                    <div class="carousel-caption ">
                        <h5>Manayata Tech Park</h5>
                        <p>Manyata Techpark is an award-winning flagship project, planned as a cohesive township at North Bangalore with commercial, residential, hospitality & retail.</p>
                        <p><a href="" className='btn btn-warning mt-3'>Learn More</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/images/img3.jpg`}  class="d-block w-100" alt="..." />
                    <div class="carousel-caption ">
                        <h5>Manayata Tech Park</h5>
                        <p>Manyata Techpark is an award-winning flagship project, planned as a cohesive township at North Bangalore with commercial, residential, hospitality & retail.</p>
                        <p><a href="" className='btn btn-warning mt-3'>Learn More</a></p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel