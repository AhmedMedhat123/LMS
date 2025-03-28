import DashboardLayout from '@/Layouts/DashboardLayout';
import { Link, useForm } from '@inertiajs/react';

const MyCourses = ({ mycourses }) => {
  const { get } = useForm();

  console.log(mycourses);

  const viewCourse = (e, courseId, sectionId) => {
    e.preventDefault();
    get(
      route('user.course.view', {
        id: courseId,
        slug: sectionId,
      })
    );
  };

  return (
    <DashboardLayout>
      <section className="dashboard-area">
        {/* end off-canvas-menu */}
        {/* end breadcrumb-content */}
        <div className="section-block mb-5" />
        <div className="dashboard-heading mb-5">
          <h3 className="fs-22 font-weight-semi-bold">My Courses</h3>
        </div>
        <div className="dashboard-cards mb-5">
          {mycourses.data.map((mycourse, index) => {
            const amount =
              mycourse.course.selling_price - mycourse.course.discount_price;
            const discount = Math.round(
              (amount / mycourse.course.selling_price) * 100
            );
            return (
              <div key={index} className="card card-item card-item-list-layout">
                <div className="card-image">
                  <Link
                    onClick={(e) =>
                      viewCourse(
                        e,
                        mycourse.course.id,
                        mycourse.course.course_name_slug
                      )
                    }
                    className="d-block"
                  >
                    <img
                      className="card-img-top object-cover"
                      src={
                        mycourse.course.course_image
                          ? `/upload/course/image/${mycourse.course.course_image}`
                          : 'assets/images/img-loading.png'
                      }
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="course-badge-labels">
                    {mycourse.course.bestseller && (
                      <div className="course-badge blue mr-1">Bestseller</div>
                    )}
                    {mycourse.course.featured && (
                      <div className="course-badge green mr-1">Featured</div>
                    )}
                    {mycourse.course.highestrated && (
                      <div className="course-badge mr-1">Highest Rated</div>
                    )}

                    {mycourse.course.discount_price ? (
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
                    {mycourse.course.label}
                  </h6>
                  <h5 className="card-title">
                    <Link
                      onClick={(e) =>
                        GetCourseDetails(
                          e,
                          mycourse.course.id,
                          mycourse.course.course_name_slug
                        )
                      }
                      className="d-block"
                    >
                      {mycourse.course.course_title}
                    </Link>
                  </h5>
                  <p className="card-text">
                    <a>{mycourse.instructor.name}</a>
                  </p>
                  {mycourse.course.reviews.length > 0 ? (
                    <div className="rating-wrap d-flex align-items-center py-2">
                      <div className="review-stars">
                        <span className="rating-number">
                          {mycourse.averageReviews
                            ? Math.round(mycourse.averageReviews * 10) / 10
                            : 'No ratings yet'}
                        </span>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={
                              index < Math.floor(mycourse.averageReviews)
                                ? 'la la-star'
                                : index < mycourse.averageReviews
                                ? 'la la-star-half-alt'
                                : 'la la-star-o'
                            }
                          />
                        ))}
                      </div>
                      <span className="rating-total pl-1">
                        ({mycourse.course.reviews.length} ratings)
                      </span>
                    </div>
                  ) : (
                    'No ratings yet'
                  )}
                  {/* end rating-wrap */}
                  <ul className="card-duration d-flex align-items-center fs-15 pb-2">
                    {/* <li className="mr-2">
                      <span className="text-black">Status:</span>
                      <span className="badge badge-success text-white">
                        Published
                      </span>
                    </li> */}
                    <li className="mr-2">
                      <span className="text-black">Duration: </span>
                      <span>{mycourse.course.duration} hours</span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    {mycourse.course.discount_price === null ? (
                      <p className="card-price text-black font-weight-bold">
                        {mycourse.course.selling_price}$
                      </p>
                    ) : (
                      <p className="card-price text-black font-weight-bold">
                        {mycourse.course.discount_price}$
                        <span className="before-price font-weight-medium ml-2">
                          {mycourse.course.selling_price}$
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                {/* end card-body */}
              </div>
            );
          })}
        </div>
        {/* end col-lg-12 */}
        <div className="text-center pt-3">
          <nav aria-label="Page navigation example" className="pagination-box">
            <ul className="pagination justify-content-center">
              {mycourses.links.map((link, index) => (
                <li
                  key={index}
                  className={`page-item ${link.active ? 'active' : ''} ${
                    link.url === null ? 'disabled' : ''
                  }`}
                >
                  <Link
                    className="page-link"
                    href={link.url || '#'}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <p className="fs-14 pt-2">
            Showing {mycourses.from} - {mycourses.to} of {mycourses.total}{' '}
            results
          </p>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default MyCourses;
