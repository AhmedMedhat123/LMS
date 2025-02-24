import React from 'react'

const HeroArea = () => {
    return (
        <>
            <section className="hero-area">
                <div className="hero-slider owl-action-styled">
                    <div className="hero-slider-item hero-bg-1">
                        <div className="container">
                            <div className="hero-content">
                                <div className="section-heading">
                                    <h2 className="section__title text-white fs-65 lh-80 pb-3">We Help You Learn <br /> What You Love
                                    </h2>
                                    <p className="section__desc text-white pb-4">Emply dummy text of the printing and typesetting
                                        industry orem Ipsum has been the
                                        <br />industry's standard dummy text ever sinceprinting and typesetting industry.
                                    </p>
                                </div>{/* end section-heading */}
                                <div className="hero-btn-box d-flex flex-wrap align-items-center pt-1">
                                    <a href="admission.html" className="btn theme-btn mr-4 mb-4">Join with Us <i className="la la-arrow-right icon ml-1" /></a>
                                    <a href="#" className="btn-text video-play-btn mb-4" data-fancybox data-src="https://www.youtube.com/watch?v=cRXm1p-CNyk">
                                        Watch Preview<i className="la la-play icon-btn ml-2" />
                                    </a>
                                </div>{/* end hero-btn-box */}
                            </div>{/* end hero-content */}
                        </div>{/* end container */}
                    </div>{/* end hero-slider-item */}
                    <div className="hero-slider-item hero-bg-2">
                        <div className="container">
                            <div className="hero-content text-center">
                                <div className="section-heading">
                                    <h2 className="section__title text-white fs-65 lh-80 pb-3">Join Aduca &amp; Get <br /> Your Free
                                        Courses!</h2>
                                    <p className="section__desc text-white pb-4">Emply dummy text of the printing and typesetting
                                        industry orem Ipsum has been the
                                        <br />industry's standard dummy text ever sinceprinting and typesetting industry.
                                    </p>
                                </div>{/* end section-heading */}
                                <div className="hero-btn-box d-flex flex-wrap align-items-center pt-1 justify-content-center">
                                    <a href="admission.html" className="btn theme-btn mr-4 mb-4">Get Started <i className="la la-arrow-right icon ml-1" /></a>
                                    <a href="#" className="btn-text video-play-btn mb-4" data-fancybox data-src="https://www.youtube.com/watch?v=cRXm1p-CNyk">
                                        Watch Preview<i className="la la-play icon-btn ml-2" />
                                    </a>
                                </div>{/* end hero-btn-box */}
                            </div>{/* end hero-content */}
                        </div>{/* container */}
                    </div>{/* end hero-slider-item */}
                    <div className="hero-slider-item hero-bg-3">
                        <div className="container">
                            <div className="hero-content text-right">
                                <div className="section-heading">
                                    <h2 className="section__title text-white fs-65 lh-80 pb-3">Learn Anything, <br /> Anytime,
                                        Anywhere</h2>
                                    <p className="section__desc text-white pb-4">Emply dummy text of the printing and typesetting
                                        industry orem Ipsum has been the
                                        <br />industry's standard dummy text ever sinceprinting and typesetting industry.
                                    </p>
                                </div>
                                <div className="hero-btn-box d-flex flex-wrap align-items-center pt-1 justify-content-end">
                                    <a href="#" className="btn-text video-play-btn mr-4 mb-4" data-fancybox data-src="https://www.youtube.com/watch?v=cRXm1p-CNyk">
                                        <i className="la la-play icon-btn mr-2" />Watch Preview
                                    </a>
                                    <a href="admission.html" className="btn theme-btn mb-4"><i className="la la-arrow-left icon mr-1" />Get Enrolled </a>
                                </div>{/* end hero-btn-box */}
                            </div>{/* end hero-content */}
                        </div>{/* container */}
                    </div>{/* end hero-slider-item */}
                </div>{/* end hero-slide */}
            </section>



        </>
    )
}

export default HeroArea
