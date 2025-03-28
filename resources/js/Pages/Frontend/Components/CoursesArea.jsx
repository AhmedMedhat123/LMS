import { Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

const CoursesArea = ({ allCategories, courses, userWishlists }) => {
  const { get, post } = useForm();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState(userWishlists || []);

  const { auth } = usePage().props;

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter(
          (course) => course.category?.category_name === selectedCategory
        );

  const GetCourseDetails = (e, courseId, sectionId) => {
    e.preventDefault();
    get(
      route('course.details', {
        id: courseId,
        slug: sectionId,
      })
    );
  };

  const GetInsturctorDetails = (e, instructorId) => {
    e.preventDefault();
    get(
      route('instructor.details', {
        id: instructorId,
      })
    );
  };

  const toggleWishlist = (e, courseId) => {
    e.preventDefault();

    // update wishlist state
    if (auth.user) {
      setWishlist(
        (prevWishlist) =>
          prevWishlist.includes(courseId)
            ? prevWishlist.filter((id) => id !== courseId) // Remove from wishlist
            : [...prevWishlist, courseId] // Add to wishlist
      );
    }

    post(route('wishlist.toggle', courseId), {
      preserveScroll: true,
    });
  };

  return (
    <>
      <section className="course-area pb-120px">
        <div className="container">
          <div className="section-heading text-center">
            <h5 className="ribbon ribbon-lg mb-2">
              Choose your desired courses
            </h5>
            <h2 className="section__title">
              The world's largest selection of courses
            </h2>
            <span className="section-divider" />
          </div>
          {/* end section-heading */}
          <ul
            className="nav nav-tabs generic-tab justify-content-center pb-4"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className={`nav-link ${
                  selectedCategory === 'All' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('All')}
              >
                All
              </button>
            </li>
            {allCategories.map((category, index) => (
              <li key={index} className="nav-item">
                <button
                  className={`nav-link ${
                    selectedCategory === category.category_name ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.category_name)}
                >
                  {category.category_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* end container */}
        <div className="card-content-wrapper bg-gray pt-50px pb-120px">
          <div className="container">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active">
                <div className="row">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => {
                      const amount =
                        course.selling_price - course.discount_price;
                      const discount = Math.round(
                        (amount / course.selling_price) * 100
                      );

                      return (
                        <div
                          key={index}
                          className="col-lg-4 responsive-column-half"
                        >
                          <div
                            className="card card-item card-preview"
                            data-tooltip-content="#tooltip_content_1"
                          >
                            <div className="card-image">
                              <Link
                                onClick={(e) =>
                                  GetCourseDetails(
                                    e,
                                    course.id,
                                    course.course_name_slug
                                  )
                                }
                                className="d-block"
                              >
                                <img
                                  className="card-img-top lazy w-[15rem] h-[15rem] object-cover"
                                  src={
                                    course.course_image
                                      ? `/upload/course/image/${course.course_image}`
                                      : 'assets/images/img-loading.png'
                                  }
                                  data-src={
                                    course.course_image
                                      ? `/upload/course/image/${course.course_image}`
                                      : 'assets/images/img-loading.png'
                                  }
                                  alt="Card image cap"
                                />
                              </Link>
                              <div className="course-badge-labels">
                                {course.bestseller && (
                                  <div className="course-badge blue mr-1">
                                    Bestseller
                                  </div>
                                )}
                                {course.featured && (
                                  <div className="course-badge green mr-1">
                                    Featured
                                  </div>
                                )}
                                {course.highestrated && (
                                  <div className="course-badge mr-1">
                                    Highest Rated
                                  </div>
                                )}

                                {course.discount_price ? (
                                  <div className="course-badge red mr-1">
                                    {discount} %Off
                                  </div>
                                ) : (
                                  ''
                                )}
                              </div>
                            </div>
                            {/* end card-image */}
                            <div className="card-body">
                              <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                {course.label}
                              </h6>
                              <h5 className="card-title">
                                <Link
                                  onClick={(e) =>
                                    GetCourseDetails(
                                      e,
                                      course.id,
                                      course.course_name_slug
                                    )
                                  }
                                >
                                  {course.course_name}
                                </Link>
                              </h5>
                              <p className="card-text">
                                <Link
                                  onClick={(e) =>
                                    GetInsturctorDetails(
                                      e,
                                      course.instructor_id
                                    )
                                  }
                                >
                                  {course.instructor.name}
                                </Link>
                              </p>
                              {course.reviews.length > 0 ? (
                                <div className="rating-wrap d-flex align-items-center py-2">
                                  <div className="review-stars">
                                    <span className="rating-number">
                                      {course.averageReviews
                                        ? Math.round(
                                            course.averageReviews * 10
                                          ) / 10
                                        : 'No ratings yet'}
                                    </span>
                                    {[...Array(5)].map((_, index) => (
                                      <span
                                        key={index}
                                        className={
                                          index <
                                          Math.floor(course.averageReviews)
                                            ? 'la la-star'
                                            : index < course.averageReviews
                                            ? 'la la-star-half-alt'
                                            : 'la la-star-o'
                                        }
                                      />
                                    ))}
                                  </div>
                                  <span className="rating-total pl-1">
                                    ({course.reviews.length} ratings)
                                  </span>
                                </div>
                              ) : (
                                'No ratings yet'
                              )}

                              {/* end rating-wrap */}
                              <div className="d-flex justify-content-between align-items-center">
                                {course.discount_price === null ? (
                                  <p className="card-price text-black font-weight-bold">
                                    {course.selling_price}$
                                  </p>
                                ) : (
                                  <p className="card-price text-black font-weight-bold">
                                    {course.discount_price}$
                                    <span className="before-price font-weight-medium ml-2">
                                      {course.selling_price}$
                                    </span>
                                  </p>
                                )}

                                <div
                                  className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                  title="Add to Wishlist"
                                  onClick={(e) => toggleWishlist(e, course.id)}
                                >
                                  <i
                                    className={`la ${
                                      wishlist.includes(course.id)
                                        ? 'la-heart'
                                        : 'la-heart-o'
                                    }`}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end card-body */}
                          </div>
                          {/* end card */}
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center w-100 mt-4 mb-4">
                      No courses found in this category.
                    </p>
                  )}
                  {/* end col-lg-4 */}
                </div>
                {/* end row */}
              </div>
            </div>
            {/* end tab-content */}
            <div className="more-btn-box mt-4 text-center">
              <a href="course-grid.html" className="btn theme-btn">
                Browse all Courses <i className="la la-arrow-right icon ml-1" />
              </a>
            </div>
            {/* end more-btn-box */}
          </div>
          {/* end container */}
        </div>
        {/* end card-content-wrapper */}
      </section>
    </>
  );
};

export default CoursesArea;
