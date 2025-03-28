import MainLayout from '@/Layouts/MainLayout';
import { CAlert } from '@coreui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useState } from 'react';

const CourseDetails = ({
  course,
  goals,
  lectures,
  sections,
  averageReviews,
  enrollmentCount,
  reviewBreakdown,
}) => {
  const { auth, userWishlists } = usePage().props;
  const [openSections, setOpenSections] = useState(sections.map(() => false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState(userWishlists || []);
  const [showFull, setShowFull] = useState(false);
  const shortDescription = course.description.slice(0, 600);
  const { data, setData, post, errors } = useForm({
    courseId: course.id,
    userId: auth.user?.id,
    instructorId: course.instructor.id,
    comment: '',
    rating: 0,
    status: 1,
  });

  const amount = course.selling_price - course.discount_price;
  const discount = Math.round((amount / course.selling_price) * 100);

  const formattedDate = new Date(course.updated_at).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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

  const addToCart = (e, courseId, instructorId) => {
    e.preventDefault();
    post(
      route('user.cart.add', {
        id: courseId,
        instructor_id: instructorId,
      }),
      {
        preserveScroll: true,
      }
    );
  };

  const submitReview = (e) => {
    e.preventDefault();
    post(route('review.store'), {
      preserveScroll: true,
    });

    setData('rating', 0);
    setData('comment', '');
  };

  return (
    <>
      <MainLayout>
        <Head title="InstructorRegister" />
        <div>
          <section className="breadcrumb-area pt-50px pb-50px bg-white pattern-bg">
            <div className="container">
              <div className="col-lg-8 mr-auto">
                <div className="breadcrumb-content">
                  <ul className="generic-list-item generic-list-item-arrow d-flex flex-wrap align-items-center">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">{course.category.category_name}</a>
                    </li>
                    <li>
                      <a href="#">{course.subcategory.subcategory_name}</a>
                    </li>
                  </ul>
                  <div className="section-heading">
                    <h2 className="section__title">{course.course_name}</h2>
                    <p className="section__desc pt-2 lh-30">
                      {course.course_title}
                    </p>
                  </div>
                  {/* end section-heading */}
                  <div className="d-flex flex-wrap align-items-center pt-3">
                    {course.bestseller && (
                      <h6 className="ribbon ribbon-lg mr-2 bg-4 text-white">
                        Bestseller
                      </h6>
                    )}
                    {course.featured && (
                      <h6 className="ribbon ribbon-lg mr-2 bg-5 text-white">
                        featured
                      </h6>
                    )}
                    {course.highestrated && (
                      <h6 className="ribbon ribbon-lg mr-2 bg-3 text-white">
                        highestrated
                      </h6>
                    )}
                    <div className="rating-wrap d-flex flex-wrap align-items-center">
                      <div className="review-stars">
                        <span className="rating-number">
                          {averageReviews
                            ? Math.round(averageReviews * 10) / 10
                            : 'No ratings yet'}
                        </span>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={
                              index < Math.floor(averageReviews)
                                ? 'la la-star'
                                : index < averageReviews
                                ? 'la la-star-half-alt'
                                : 'la la-star-o'
                            }
                          />
                        ))}
                      </div>

                      <span className="rating-total pl-1">
                        ({course.reviews.length} ratings)
                      </span>
                      <span className="student-total pl-2">
                        {enrollmentCount}{' '}
                        {enrollmentCount === 1 ? 'student' : 'student'}
                      </span>
                    </div>
                  </div>
                  {/* end d-flex */}
                  <p className="pt-2 pb-1">
                    Created by
                    <a
                      href="teacher-detail.html"
                      className="text-color hover-underline ml-1"
                    >
                      {course.instructor.name}
                    </a>
                  </p>
                  <div className="d-flex flex-wrap align-items-center">
                    <p className="pr-3 d-flex align-items-center">
                      <svg
                        className="svg-icon-color-gray mr-1"
                        width="16px"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      Last updated: {formattedDate}
                    </p>
                    <p className="pr-3 d-flex align-items-center">
                      <svg
                        className="svg-icon-color-gray mr-1"
                        width="16px"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                      </svg>
                      English
                    </p>
                  </div>
                  {/* end d-flex */}
                  <div className="bread-btn-box pt-3">
                    <button
                      className="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 mr-2 mb-2"
                      onClick={(e) => toggleWishlist(e, course.id)}
                    >
                      <i
                        className={`mr-1 ${
                          wishlist.includes(course.id)
                            ? 'la la-heart'
                            : 'la la-heart-o'
                        }`}
                      />
                      <span>
                        {wishlist.includes(course.id)
                          ? 'Wishlisted'
                          : 'Wishlist'}
                      </span>
                    </button>
                  </div>
                </div>
                {/* end breadcrumb-content */}
              </div>
              {/* end col-lg-8 */}
            </div>
            {/* end container */}
          </section>

          <section className="course-details-area pb-20px">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 pb-5">
                  <div className="course-details-content-wrap pt-90px">
                    <div className="course-overview-card bg-gray p-4 rounded">
                      <h3 className="fs-24 font-weight-semi-bold pb-3">
                        What you'll learn?
                      </h3>
                      <ul className="generic-list-item overview-list-item">
                        {goals.map((goal, index) => (
                          <li key={index}>
                            <i className="la la-check mr-1 text-black" />
                            {goal.goal_name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="course-overview-card">
                      <h3 className="fs-24 font-weight-semi-bold pb-3">
                        Requirements
                      </h3>
                      <ul className="generic-list-item generic-list-item-bullet fs-15">
                        <li>{course.prerequisites}</li>
                      </ul>
                    </div>

                    <div className="section-block mb-5" />

                    <div className="course-overview-card">
                      <h3 className="fs-24 font-weight-semi-bold pb-3">
                        Description
                      </h3>
                      <p
                        className="fs-15 pb-2"
                        dangerouslySetInnerHTML={{
                          __html: showFull
                            ? course.description
                            : shortDescription,
                        }}
                      ></p>
                      {course.description.length > 600 && (
                        <button
                          className="text-blue-500 font-semibold focus:outline-none"
                          onClick={() => setShowFull(!showFull)}
                        >
                          {showFull ? 'Show Less' : 'Show More'}
                        </button>
                      )}
                    </div>
                    {/* end course-overview-card */}
                    <div className="course-overview-card">
                      <div className="curriculum-header d-flex align-items-center justify-content-between pb-4">
                        <h3 className="fs-24 font-weight-semi-bold">
                          Course content
                        </h3>
                        <div className="curriculum-duration fs-15">
                          <span className="curriculum-total__text mr-2">
                            <strong className="text-black font-weight-semi-bold mr-1">
                              Total:
                            </strong>
                            {lectures.length} lectures
                          </span>
                          <span className="curriculum-total__hours">
                            <strong className="text-black font-weight-semi-bold mr-1">
                              Total hours:
                            </strong>
                            {course.duration}
                          </span>
                        </div>
                      </div>
                      <div className="curriculum-content">
                        <div id="accordion" className="generic-accordion">
                          {sections.map((section, index) => {
                            const collapseId = `collapse-${index}`;
                            const headingId = `heading-${index}`;
                            const isOpen = openSections[index];

                            return (
                              <div key={index} className="card">
                                <div className="card-header" id={headingId}>
                                  <button
                                    className="btn btn-link d-flex align-items-center justify-content-between"
                                    onClick={() => toggleSection(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={collapseId}
                                  >
                                    <i
                                      className={`la ${
                                        isOpen ? 'la-minus' : 'la-plus'
                                      }`}
                                    />

                                    <div>
                                      <span className="font-bold text-lg mr-2">
                                        Section {index + 1}:
                                      </span>
                                      {section.section_title}
                                    </div>
                                    <span className="fs-15 text-gray font-weight-medium">
                                      {section.lectures.length} lectures
                                    </span>
                                  </button>
                                </div>
                                {/* end card-header */}
                                {isOpen && (
                                  <div id={collapseId} className="card-body">
                                    <ul className="generic-list-item">
                                      {section.lectures.map(
                                        (lecture, index) => (
                                          <li key={index}>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <span>
                                                <i className="la la-play-circle mr-1" />
                                                {lecture.lecture_title}
                                              </span>
                                              <span>03:09</span>
                                            </div>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                    {/* end card-body */}
                                  </div>
                                )}
                                {/* end collapse */}
                              </div>
                            );
                          })}
                        </div>
                        {/* end generic-accordion */}
                      </div>
                      {/* end curriculum-content */}
                    </div>
                    {/* end course-overview-card */}
                    <div className="section-block" />

                    <div className="course-overview-card pt-4">
                      <h3 className="fs-24 font-weight-semi-bold pb-4">
                        About the instructor
                      </h3>
                      <div className="instructor-wrap">
                        <div className="media media-card">
                          <div className="instructor-img">
                            <a
                              href="teacher-detail.html"
                              className="media-img d-block"
                            >
                              <img
                                className="lazy"
                                src={
                                  course.instructor.photo
                                    ? `/upload/instructor_images/${course.instructor.photo}`
                                    : '/images/user_placeholder.png'
                                }
                                data-src={
                                  course.instructor.photo
                                    ? `/upload/instructor_images/${course.instructor.photo}`
                                    : '/images/user_placeholder.png'
                                }
                                alt="Avatar image"
                              />
                            </a>
                          </div>
                          {/* end instructor-img */}
                          <div className="media-body flex flex-col gap-2 mt-4">
                            <h5>
                              <a href="teacher-detail.html">
                                {course.instructor.name}
                              </a>
                            </h5>
                            <span className="d-block lh-18  ">
                              {course.instructor.email}
                            </span>
                            <span className="d-block lh-18  ">
                              {course.instructor.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* end instructor-wrap */}
                    </div>
                    <div className="section-block" />
                    {/* end course-overview-card */}
                    <div className="course-overview-card pt-4">
                      <h3 className="fs-24 font-weight-semi-bold pb-40px">
                        Student feedback
                      </h3>
                      <div className="feedback-wrap">
                        <div className="media media-card align-items-center">
                          <div className="review-rating-summary">
                            <span className="stats-average__count">
                              {averageReviews
                                ? Math.round(averageReviews * 10) / 10
                                : 'No ratings yet'}
                            </span>
                            <div className="rating-wrap pt-1">
                              <div className="review-stars">
                                {[...Array(5)].map((_, index) => (
                                  <span
                                    key={index}
                                    className={
                                      index < Math.floor(averageReviews)
                                        ? 'la la-star'
                                        : index < averageReviews
                                        ? 'la la-star-half-alt'
                                        : 'la la-star-o'
                                    }
                                  />
                                ))}
                              </div>
                              <span className="rating-total d-block">
                                ({course.reviews.length})
                              </span>
                              <span>Course Rating</span>
                            </div>
                            {/* end rating-wrap */}
                          </div>
                          {/* end review-rating-summary */}
                          <div className="media-body">
                            {reviewBreakdown?.map((review, index) => (
                              <div
                                key={index}
                                className="review-bars d-flex align-items-center mb-2"
                              >
                                <div className="review-bars__text">
                                  {review.rating} stars
                                </div>
                                <div className="review-bars__fill">
                                  <div className="skillbar-box">
                                    <div
                                      className="skillbar"
                                      data-percent={`${review.percent}%`}
                                    >
                                      <div
                                        className="skillbar-bar bg-3"
                                        style={{ width: `${review.percent}%` }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="review-bars__percent">
                                  {review.percent}%
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* end media-body */}
                        </div>
                      </div>
                      {/* end feedback-wrap */}
                    </div>
                    {/* end course-overview-card */}
                    <div className="course-overview-card pt-4">
                      <h3 className="fs-24 font-weight-semi-bold pb-4">
                        Reviews
                      </h3>
                      <div className="review-wrap">
                        {course.reviews.map((review, index) => (
                          <div
                            key={index}
                            className="media media-card border-bottom border-bottom-gray pb-4 mb-4"
                          >
                            <div className="media-img mr-4 rounded-full">
                              <img
                                className="rounded-full lazy"
                                src={
                                  review.user.photo
                                    ? `/upload/users_images/${review.user.photo}`
                                    : '/images/user_placeholder.png'
                                }
                                alt="User image"
                              />
                            </div>
                            <div className="media-body">
                              <div className="d-flex flex-wrap align-items-center justify-content-between pb-1">
                                <h5>{review.user.name}</h5>
                                <div className="review-stars">
                                  {[...Array(5)].map((_, i) => (
                                    <span
                                      key={i}
                                      className={
                                        i < review.rating
                                          ? 'la la-star'
                                          : 'la la-star-o'
                                      }
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="d-block lh-18 pb-2">
                                {review.created_at
                                  ? formatDistanceToNow(
                                      parseISO(review.created_at),
                                      { addSuffix: true }
                                    )
                                  : 'Unknown time'}
                              </span>
                              <p className="pb-2">{review.comment}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* end review-wrap */}
                      <div className="see-more-review-btn text-center">
                        <button
                          type="button"
                          className="btn theme-btn theme-btn-transparent"
                        >
                          Load more reviews
                        </button>
                      </div>
                    </div>
                    {/* end course-overview-card */}

                    {auth.user ? (
                      <div className="course-overview-card pt-4">
                        <form onSubmit={submitReview} className="row">
                          <h3 className="fs-24 font-weight-semi-bold pb-4">
                            Add a Review
                          </h3>
                          <div className="leave-rating-wrap pb-4">
                            <div className="leave-rating leave--rating">
                              <input
                                checked={data.rating == 5}
                                value={5}
                                onChange={(e) =>
                                  setData('rating', e.target.value)
                                }
                                type="radio"
                                name="rate"
                                id="star5"
                              />
                              <label htmlFor="star5" />
                              <input
                                checked={data.rating == 4}
                                value={4}
                                onChange={(e) =>
                                  setData('rating', e.target.value)
                                }
                                type="radio"
                                name="rate"
                                id="star4"
                              />
                              <label htmlFor="star4" />
                              <input
                                checked={data.rating == 3}
                                value={3}
                                onChange={(e) =>
                                  setData('rating', e.target.value)
                                }
                                type="radio"
                                name="rate"
                                id="star3"
                              />
                              <label htmlFor="star3" />
                              <input
                                checked={data.rating == 2}
                                value={2}
                                onChange={(e) =>
                                  setData('rating', e.target.value)
                                }
                                type="radio"
                                name="rate"
                                id="star2"
                              />
                              <label htmlFor="star2" />
                              <input
                                checked={data.rating == 1}
                                value={1}
                                onChange={(e) =>
                                  setData('rating', e.target.value)
                                }
                                type="radio"
                                name="rate"
                                id="star1"
                              />
                              <label htmlFor="star1" />
                            </div>
                            {errors.rating && (
                              <CAlert color="danger">{errors.rating}</CAlert>
                            )}
                            {/* end leave-rating */}
                          </div>
                          <div className="input-box col-lg-12">
                            <label className="label-text">Comment</label>
                            <div className="form-group">
                              <textarea
                                className="form-control form--control pl-3"
                                name="Comment"
                                placeholder="Write Comment"
                                rows={5}
                                defaultValue={''}
                                value={data.comment}
                                onChange={(e) =>
                                  setData('comment', e.target.value)
                                }
                              />
                            </div>
                            {errors.comment && (
                              <CAlert color="danger">{errors.comment}</CAlert>
                            )}
                          </div>
                          {/* end input-box */}
                          <div className="btn-box col-lg-12">
                            {/* end custom-control */}
                            <button className="btn theme-btn" type="submit">
                              Submit Review
                            </button>
                          </div>
                          {/* end btn-box */}
                        </form>
                      </div>
                    ) : (
                      <>
                        <div className="section-block" />

                        <div className="flex flex-col items-center justify-center mt-5">
                          <p className="text-gray-700 text-3xl mb-2">
                            Login to add a review.
                            <Link href={route('login')} className="ml-2">
                              Login
                            </Link>
                          </p>
                        </div>
                      </>
                    )}

                    {/* end course-overview-card */}
                  </div>
                  {/* end course-details-content-wrap */}
                </div>
                {/* end col-lg-8 */}
                <div className="col-lg-4 pb-5 flex justify-center">
                  <div className="sidebar sidebar-negative">
                    <div className="card card-item w-96">
                      <div className="card-body">
                        <div className="preview-course-video">
                          <button
                            onClick={() => setIsModalOpen(true)}
                            className="border-0 bg-transparent"
                          >
                            <img
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
                              alt="course-img"
                              className="w-100 rounded lazy"
                            />
                            <div className="preview-course-video-content  items-center">
                              <div className="overlay" />
                              <div className="play-button">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  viewBox="-307.4 338.8 91.8 91.8"
                                  style={{
                                    enableBackground:
                                      'new -307.4 338.8 91.8 91.8',
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        '\n                              .st0 {\n                                fill: #ffffff;\n                                border-radius: 100px;\n                              }\n                              .st1 {\n                                fill: #000000;\n                              }\n                            ',
                                    }}
                                  />
                                  <g>
                                    <circle
                                      className="st0"
                                      cx="-261.5"
                                      cy="384.7"
                                      r="45.9"
                                    />
                                    <path
                                      className="st1"
                                      d="M-272.9,363.2l35.8,20.7c0.7,0.4,0.7,1.3,0,1.7l-35.8,20.7c-0.7,0.4-1.5-0.1-1.5-0.9V364C-274.4,363.3-273.5,362.8-272.9,363.2z"
                                    />
                                  </g>
                                </svg>
                              </div>
                              <p className="fs-15 font-weight-bold text-white pt-3">
                                Preview this course
                              </p>
                            </div>
                          </button>
                        </div>
                        {/* end preview-course-video */}
                        <div className="preview-course-feature-content pt-40px">
                          <p className="d-flex align-items-center pb-2 mb-3">
                            {course.discount_price === null ? (
                              <span className="fs-35 font-weight-semi-bold text-black">
                                ${course.selling_price}
                              </span>
                            ) : (
                              <>
                                <span className="fs-35 font-weight-semi-bold text-black">
                                  ${course.discount_price}
                                </span>
                                <span className="before-price mx-1">
                                  ${course.selling_price}
                                </span>
                              </>
                            )}

                            <span className="price-discount">
                              {course.discount_price ? ` ${discount}% off` : ''}
                            </span>
                          </p>

                          <div className="buy-course-btn-box">
                            <Link
                              onClick={(e) =>
                                addToCart(e, course.id, course.instructor_id)
                              }
                              className="btn theme-btn w-100 mb-2"
                            >
                              <i className="la la-shopping-cart fs-18 mr-1" />{' '}
                              Add to cart
                            </Link>
                            <Link
                              href={route('user.checkout')}
                              className="btn theme-btn w-100 theme-btn-white mb-2"
                            >
                              <i className="la la-shopping-bag mr-1" /> Buy this
                              course
                            </Link>
                          </div>
                        </div>
                        {/* end preview-course-content */}
                      </div>
                    </div>
                    {/* end card */}
                    <div className="card card-item w-96">
                      <div className="card-body">
                        <h3 className="card-title fs-18 pb-2">
                          Course Features
                        </h3>
                        <div className="divider">
                          <span />
                        </div>
                        <ul className="generic-list-item generic-list-item-flash">
                          <li className="d-flex align-items-center justify-content-between">
                            <span>
                              <i className="la la-clock mr-2 text-color" />
                              Duration
                            </span>
                            {course.duration} hours
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <span>
                              <i className="la la-play-circle-o mr-2 text-color" />
                              Lectures
                            </span>
                            {lectures.length}
                          </li>

                          <li className="d-flex align-items-center justify-content-between">
                            <span>
                              <i className="la la-file-text-o mr-2 text-color" />
                              sections
                            </span>
                            4
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <span>
                              <i className="la la-lightbulb mr-2 text-color" />
                              Skill level
                            </span>
                            {course.label}
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <span>
                              <i className="la la-certificate mr-2 text-color" />
                              Certificate
                            </span>
                            {course.certificate}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* end sidebar */}
                </div>
                {/* end col-lg-4 */}
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </section>
          {/* end course-details-area */}

          <div className="section-block" />

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={closeModal}
            >
              <div
                className={`modal fade ${isModalOpen ? 'show d-block' : ''}`}
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-content">
                    <div className="modal-header border-bottom-gray">
                      <div className="pr-2">
                        <p className="pb-2 font-weight-semi-bold">
                          Course Preview
                        </p>
                        <h5 className="modal-title fs-19 font-weight-semi-bold lh-24">
                          Java Programming Masterclass for Software Developers
                        </h5>
                      </div>
                      <button
                        type="button"
                        className="close"
                        onClick={closeModal}
                      >
                        <span aria-hidden="true" className="la la-times"></span>
                      </button>
                    </div>
                    {/* end modal-header */}
                    <div className="modal-body">
                      <video
                        controls
                        crossOrigin="anonymous"
                        playsInline
                        poster={`/upload/course/image/${course.course_image}`}
                        id="player"
                      >
                        {/* Video files */}
                        <source
                          src={`/upload/course/video/${course.video}`}
                          type="video/mp4"
                        />
                        {/* <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                          type="video/mp4"
                        /> */}
                      </video>
                    </div>
                    {/* end modal-body */}
                  </div>
                  {/* end modal-content */}
                </div>
                {/* end modal-dialog */}
              </div>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default CourseDetails;
