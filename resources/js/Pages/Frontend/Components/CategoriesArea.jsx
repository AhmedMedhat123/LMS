const CategoriesArea = ({ categories }) => {
    return (
        <>
            <section className="category-area pb-90px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="category-content-wrap">
                                <div className="section-heading">
                                    <h5 className="ribbon ribbon-lg mb-2">
                                        Categories
                                    </h5>
                                    <h2 className="section__title">
                                        Popular Categories
                                    </h2>
                                    <span className="section-divider" />
                                </div>
                                {/* end section-heading */}
                            </div>
                        </div>
                        {/* end col-lg-9 */}
                        <div className="col-lg-3">
                            <div className="category-btn-box text-right">
                                <a
                                    href="categories.html"
                                    className="btn theme-btn"
                                >
                                    All Categories{" "}
                                    <i className="la la-arrow-right icon ml-1" />
                                </a>
                            </div>
                            {/* end category-btn-box*/}
                        </div>
                        {/* end col-lg-3 */}
                    </div>
                    {/* end row */}
                    <div className="category-wrapper mt-30px">
                        <div className="row">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="col-lg-4 responsive-column-half"
                                >
                                    <div className="category-item ">
                                        <img
                                            className="cat__img lazy w-[150px] h-[150px] object-cover"
                                            src={
                                                category.category_image
                                                    ? `/upload/category/${category.category_image}`
                                                    : "assets/images/img-loading.png"
                                            }
                                            data-src={
                                                category.category_image
                                                    ? `/upload/category/${category.category_image}`
                                                    : "assets/images/img-loading.png"
                                            }
                                            alt="Category image"
                                        />
                                        <div className="category-content">
                                            <div className="category-inner">
                                                <h3 className="cat__title">
                                                    <a href="#">
                                                        {category.category_name}
                                                    </a>
                                                </h3>
                                                <a
                                                    href="#"
                                                    className="btn theme-btn theme-btn-sm theme-btn-white"
                                                >
                                                    Explore
                                                    <i className="la la-arrow-right icon ml-1" />
                                                </a>
                                            </div>
                                        </div>
                                        {/* end category-content */}
                                    </div>
                                    {/* end category-item */}
                                </div>
                            ))}
                            {/* end col-lg-4 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end category-wrapper */}
                </div>
                {/* end container */}
            </section>
        </>
    );
};

export default CategoriesArea;
