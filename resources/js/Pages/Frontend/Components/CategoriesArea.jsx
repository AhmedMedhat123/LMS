
const CategoriesArea = () => {
    return (
        <>
            <section className="category-area pb-90px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="category-content-wrap">
                                <div className="section-heading">
                                    <h5 className="ribbon ribbon-lg mb-2">Categories</h5>
                                    <h2 className="section__title">Popular Categories</h2>
                                    <span className="section-divider" />
                                </div>{/* end section-heading */}
                            </div>
                        </div>{/* end col-lg-9 */}
                        <div className="col-lg-3">
                            <div className="category-btn-box text-right">
                                <a href="categories.html" className="btn theme-btn">All Categories <i className="la la-arrow-right icon ml-1" /></a>
                            </div>{/* end category-btn-box*/}
                        </div>{/* end col-lg-3 */}
                    </div>{/* end row */}
                    <div className="category-wrapper mt-30px">
                        <div className="row">
                            <div className="col-lg-4 responsive-column-half">
                                <div className="category-item">
                                    <img className="cat__img lazy" src="assets/images/img-loading.png" data-src="assets/images/img1.jpg" alt="Category image" />
                                    <div className="category-content">
                                        <div className="category-inner">
                                            <h3 className="cat__title"><a href="#">Business Study</a></h3>
                                            <p className="cat__meta">9 courses</p>
                                            <a href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Explore<i className="la la-arrow-right icon ml-1" /></a>
                                        </div>
                                    </div>{/* end category-content */}
                                </div>{/* end category-item */}
                            </div>{/* end col-lg-4 */}
                            <div className="col-lg-4 responsive-column-half">
                                <div className="category-item">
                                    <img className="cat__img lazy" src="assets/images/img-loading.png" data-src="assets/images/img2.jpg" alt="Category image" />
                                    <div className="category-content">
                                        <div className="category-inner">
                                            <h3 className="cat__title"><a href="#">Art &amp; Design</a></h3>
                                            <p className="cat__meta">7 courses</p>
                                            <a href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Explore<i className="la la-arrow-right icon ml-1" /></a>
                                        </div>
                                    </div>{/* end category-content */}
                                </div>{/* end category-item */}
                            </div>{/* end col-lg-4 */}
                            <div className="col-lg-4 responsive-column-half">
                                <div className="category-item">
                                    <img className="cat__img lazy" src="assets/images/img-loading.png" data-src="assets/images/img3.jpg" alt="Category image" />
                                    <div className="category-content">
                                        <div className="category-inner">
                                            <h3 className="cat__title"><a href="#">Web Development</a></h3>
                                            <p className="cat__meta">8 courses</p>
                                            <a href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Explore<i className="la la-arrow-right icon ml-1" /></a>
                                        </div>
                                    </div>{/* end category-content */}
                                </div>{/* end category-item */}
                            </div>{/* end col-lg-4 */}
                            <div className="col-lg-4 responsive-column-half">
                                <div className="category-item">
                                    <img className="cat__img lazy" src="assets/images/img-loading.png" data-src="assets/images/img4.jpg" alt="Category image" />
                                    <div className="category-content">
                                        <div className="category-inner">
                                            <h3 className="cat__title"><a href="#">Health &amp; Fitness</a></h3>
                                            <p className="cat__meta">6 courses</p>
                                            <a href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Explore<i className="la la-arrow-right icon ml-1" /></a>
                                        </div>
                                    </div>{/* end category-content */}
                                </div>{/* end category-item */}
                            </div>{/* end col-lg-4 */}
                            <div className="col-lg-4 responsive-column-half">
                                <div className="category-item">
                                    <img className="cat__img lazy" src="assets/images/img-loading.png" data-src="assets/images/img5.jpg" alt="Category image" />
                                    <div className="category-content">
                                        <div className="category-inner">
                                            <h3 className="cat__title"><a href="#">Photography</a></h3>
                                            <p className="cat__meta">7 courses</p>
                                            <a href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Explore<i className="la la-arrow-right icon ml-1" /></a>
                                        </div>
                                    </div>{/* end category-content */}
                                </div>{/* end category-item */}
                            </div>{/* end col-lg-4 */}
                            <div className="col-lg-4 responsive-column-half">
                                <div className="category-item">
                                    <img className="cat__img lazy" src="assets/images/img-loading.png" data-src="assets/images/img6.jpg" alt="Category image" />
                                    <div className="category-content">
                                        <div className="category-inner">
                                            <h3 className="cat__title"><a href="#">Mathematics</a></h3>
                                            <p className="cat__meta">8 courses</p>
                                            <a href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Explore<i className="la la-arrow-right icon ml-1" /></a>
                                        </div>
                                    </div>{/* end category-content */}
                                </div>{/* end category-item */}
                            </div>{/* end col-lg-4 */}
                        </div>{/* end row */}
                    </div>{/* end category-wrapper */}
                </div>{/* end container */}
            </section>

        </>
    )
}

export default CategoriesArea
