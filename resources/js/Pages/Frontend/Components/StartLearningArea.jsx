
const StartLearningArea = () => {
    return (
        <>
            <section className="get-started-area pt-30px pb-90px position-relative">
                <span className="ring-shape ring-shape-1" />
                <span className="ring-shape ring-shape-2" />
                <span className="ring-shape ring-shape-3" />
                <span className="ring-shape ring-shape-4" />
                <span className="ring-shape ring-shape-5" />
                <span className="ring-shape ring-shape-6" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 responsive-column-half">
                            <div className="card card-item hover-s text-center">
                                <div className="card-body">
                                    <img src="assets/images/img-loading.png" data-src="assets/images/small-img-2.jpg" alt="card image" className="img-fluid rounded-full lazy" />
                                    <h5 className="card-title pt-4 pb-2">Become an Instructor</h5>
                                    <p className="card-text">Teach what you love. Aduca gives you the tools to create a course.</p>
                                    <div className="btn-box mt-20px">
                                        <a href="become-a-teacher.html" className="btn theme-btn theme-btn-sm theme-btn-white lh-30"><i className="la la-user mr-1" />Start Teaching</a>
                                    </div>{/* end btn-box */}
                                </div>{/* end card-body */}
                            </div>{/* end card */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column-half">
                            <div className="card card-item hover-s text-center">
                                <div className="card-body">
                                    <img src="assets/images/img-loading.png" data-src="assets/images/small-img-3.jpg" alt="card image" className="img-fluid rounded-full lazy" />
                                    <h5 className="card-title pt-4 pb-2">Become a Learner</h5>
                                    <p className="card-text">Learn what you love! transform your life through education</p>
                                    <div className="btn-box mt-20px">
                                        <a href="admission.html" className="btn theme-btn theme-btn-sm theme-btn-white lh-30"><i className="la la-file-text-o mr-1" />Start Learning</a>
                                    </div>{/* end btn-box */}
                                </div>{/* end card-body */}
                            </div>{/* end card */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column-half">
                            <div className="card card-item hover-s text-center">
                                <div className="card-body">
                                    <img src="assets/images/img-loading.png" data-src="assets/images/small-img-4.jpg" alt="card image" className="img-fluid rounded-full lazy" />
                                    <h5 className="card-title pt-4 pb-2">Aduca for Business</h5>
                                    <p className="card-text">Get unlimited access to 5,000+ of Aduca's top courses for your team</p>
                                    <div className="btn-box mt-20px">
                                        <a href="for-business.html" className="btn theme-btn theme-btn-sm theme-btn-white lh-30"><i className="la la-briefcase mr-1" />Get aduca for business</a>
                                    </div>{/* end btn-box */}
                                </div>{/* end card-body */}
                            </div>{/* end card */}
                        </div>{/* end col-lg-4 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>

        </>
    )
}

export default StartLearningArea
