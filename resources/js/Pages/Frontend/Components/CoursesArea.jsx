
const CoursesArea = () => {
    return (
        <>
            <section className="course-area pb-120px">
                <div className="container">
                    <div className="section-heading text-center">
                        <h5 className="ribbon ribbon-lg mb-2">Choose your desired courses</h5>
                        <h2 className="section__title">The world's largest selection of courses</h2>
                        <span className="section-divider" />
                    </div>{/* end section-heading */}
                    <ul className="nav nav-tabs generic-tab justify-content-center pb-4" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="true">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="design-tab" data-toggle="tab" href="#design" role="tab" aria-controls="design" aria-selected="false">Design</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="development-tab" data-toggle="tab" href="#development" role="tab" aria-controls="development" aria-selected="false">Development</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="drawing-tab" data-toggle="tab" href="#drawing" role="tab" aria-controls="drawing" aria-selected="false">Drawing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="marketing-tab" data-toggle="tab" href="#marketing" role="tab" aria-controls="marketing" aria-selected="false">Marketing</a>
                        </li>
                    </ul>
                </div>{/* end container */}
                <div className="card-content-wrapper bg-gray pt-50px pb-120px">
                    <div className="container">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="business" role="tabpanel" aria-labelledby="business-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img8.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Bestseller</div>
                                                    <div className="course-badge blue">-39%</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Business Intelligence
                                                    Analyst Course 2021</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">12.99 <span className="before-price font-weight-medium">129.99</span></p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img9.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge red">Featured</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Business Intelligence
                                                    Analyst Course 2021</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img10.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Business Intelligence
                                                    Analyst Course 2021</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img11.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Business Intelligence
                                                    Analyst Course 2021</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img12.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge green">Free</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Business Intelligence
                                                    Analyst Course 2021</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">Free</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img13.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge sky-blue">Highest rated</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Business Intelligence
                                                    Analyst Course 2021</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                </div>{/* end row */}
                            </div>{/* end tab-pane */}
                            <div className="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img11.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">Ultimate Adobe Photoshop
                                                    Training: From Beginner to Pro</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img12.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge green">Free</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">Ultimate Adobe Photoshop
                                                    Training: From Beginner to Pro</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">Free</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img13.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge sky-blue">Highest rated</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">Ultimate Adobe Photoshop
                                                    Training: From Beginner to Pro</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img8.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Bestseller</div>
                                                    <div className="course-badge blue">-39%</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">Ultimate Adobe Photoshop
                                                    Training: From Beginner to Pro</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">12.99 <span className="before-price font-weight-medium">129.99</span></p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img9.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge red">Featured</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">Ultimate Adobe Photoshop
                                                    Training: From Beginner to Pro</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img10.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">Ultimate Adobe Photoshop
                                                    Training: From Beginner to Pro</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                </div>{/* end row */}
                            </div>{/* end tab-pane */}
                            <div className="tab-pane fade" id="development" role="tabpanel" aria-labelledby="development-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img8.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Bestseller</div>
                                                    <div className="course-badge blue">-39%</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete WordPress
                                                    Website Business Course</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">12.99 <span className="before-price font-weight-medium">129.99</span></p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img9.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge red">Featured</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete WordPress
                                                    Website Business Course</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img10.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete WordPress
                                                    Website Business Course</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img11.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete WordPress
                                                    Website Business Course</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img12.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge green">Free</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete WordPress
                                                    Website Business Course</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">Free</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img13.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge sky-blue">Highest rated</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete WordPress
                                                    Website Business Course</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                </div>{/* end row */}
                            </div>{/* end tab-pane */}
                            <div className="tab-pane fade" id="drawing" role="tabpanel" aria-labelledby="drawing-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img11.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Ultimate Drawing Course
                                                    - Beginner to Advanced</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img12.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge green">Free</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Ultimate Drawing Course
                                                    - Beginner to Advanced</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">Free</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img13.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge sky-blue">Highest rated</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Ultimate Drawing Course
                                                    - Beginner to Advanced</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img8.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Bestseller</div>
                                                    <div className="course-badge blue">-39%</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Ultimate Drawing Course
                                                    - Beginner to Advanced</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">12.99 <span className="before-price font-weight-medium">129.99</span></p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img9.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge red">Featured</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Ultimate Drawing Course
                                                    - Beginner to Advanced</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img10.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Ultimate Drawing Course
                                                    - Beginner to Advanced</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                </div>{/* end row */}
                            </div>{/* end tab-pane */}
                            <div className="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img8.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Bestseller</div>
                                                    <div className="course-badge blue">-39%</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete Digital
                                                    Marketing Course - 12 Courses in 1</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">12.99 <span className="before-price font-weight-medium">129.99</span></p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img9.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge red">Featured</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete Digital
                                                    Marketing Course - 12 Courses in 1</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img10.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete Digital
                                                    Marketing Course - 12 Courses in 1</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img11.jpg" alt="Card image cap" />
                                                </a>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete Digital
                                                    Marketing Course - 12 Courses in 1</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img12.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge green">Free</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete Digital
                                                    Marketing Course - 12 Courses in 1</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">Free</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                            <div className="card-image">
                                                <a href="course-details.html" className="d-block">
                                                    <img className="card-img-top lazy" src="assets/images/img-loading.png" data-src="assets/images/img13.jpg" alt="Card image cap" />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge sky-blue">Highest rated</div>
                                                </div>
                                            </div>{/* end card-image */}
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a href="course-details.html">The Complete Digital
                                                    Marketing Course - 12 Courses in 1</a></h5>
                                                <p className="card-text"><a href="teacher-detail.html">Jose Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star" />
                                                        <span className="la la-star-o" />
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>{/* end rating-wrap */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i className="la la-heart-o" /></div>
                                                </div>
                                            </div>{/* end card-body */}
                                        </div>{/* end card */}
                                    </div>{/* end col-lg-4 */}
                                </div>{/* end row */}
                            </div>{/* end tab-pane */}
                        </div>{/* end tab-content */}
                        <div className="more-btn-box mt-4 text-center">
                            <a href="course-grid.html" className="btn theme-btn">Browse all Courses <i className="la la-arrow-right icon ml-1" /></a>
                        </div>{/* end more-btn-box */}
                    </div>{/* end container */}
                </div>{/* end card-content-wrapper */}
            </section>

        </>

    )
}

export default CoursesArea
