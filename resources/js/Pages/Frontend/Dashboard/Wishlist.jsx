import DashboardLayout from '@/Layouts/DashboardLayout';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

const Wishlist = ({ wishlist }) => {
  const { get, post } = useForm();
  const { auth, userWishlists } = usePage().props;
  const [wishlists, setWishlists] = useState(userWishlists || []);

  console.log(wishlist);

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
      setWishlists(
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
    <DashboardLayout>
      <div className="dashboard-heading mb-5">
        <h3 className="fs-22 font-weight-semi-bold">My Bookmarks</h3>
      </div>
      <div className="row">
        {wishlist.data.map((wish, index) => {
          const amount = wish.course.selling_price - wish.course.discount_price;
          const discount = Math.round(
            (amount / wish.course.selling_price) * 100
          );

          return (
            <div key={index} className="col-lg-4 responsive-column-half">
              <div
                className="card card-item card-preview"
                data-tooltip-content="#tooltip_content_1"
              >
                <div className="card-image">
                  <Link
                    onClick={(e) =>
                      GetCourseDetails(
                        e,
                        wish.course.id,
                        wish.course.course_name_slug
                      )
                    }
                    className="d-block"
                  >
                    <img
                      className="card-img-top lazy w-[15rem] h-[15rem] object-cover"
                      src={
                        wish.course.course_image
                          ? `/upload/course/image/${wish.course.course_image}`
                          : 'assets/images/img-loading.png'
                      }
                      data-src={
                        wish.course.course_image
                          ? `/upload/course/image/${wish.course.course_image}`
                          : 'assets/images/img-loading.png'
                      }
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="course-badge-labels">
                    {wish.course.bestseller && (
                      <div className="course-badge blue mr-1">Bestseller</div>
                    )}
                    {wish.course.featured && (
                      <div className="course-badge green mr-1">Featured</div>
                    )}
                    {wish.course.highestrated && (
                      <div className="course-badge mr-1">Highest Rated</div>
                    )}

                    {wish.course.discount_price ? (
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
                    {wish.course.label}
                  </h6>
                  <h5 className="card-title">
                    <Link
                      onClick={(e) =>
                        GetCourseDetails(
                          e,
                          wish.course.id,
                          wish.course.course_name_slug
                        )
                      }
                    >
                      {wish.course.course_name}
                    </Link>
                  </h5>
                  <p className="card-text">
                    <Link
                      onClick={(e) =>
                        GetInsturctorDetails(e, wish.course.instructor_id)
                      }
                    >
                      {wish.course.instructor.name}
                    </Link>
                  </p>
                  {wish.course.reviews.length > 0 ? (
                    <div className="rating-wrap d-flex align-items-center py-2">
                      <div className="review-stars">
                        <span className="rating-number">
                          {wish.averageReviews
                            ? Math.round(wish.averageReviews * 10) / 10
                            : 'No ratings yet'}
                        </span>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={
                              index < Math.floor(wish.averageReviews)
                                ? 'la la-star'
                                : index < wish.averageReviews
                                ? 'la la-star-half-alt'
                                : 'la la-star-o'
                            }
                          />
                        ))}
                      </div>
                      <span className="rating-total pl-1">
                        ({wish.course.reviews.length} ratings)
                      </span>
                    </div>
                  ) : (
                    'No ratings yet'
                  )}
                  {/* end rating-wrap */}
                  <div className="d-flex justify-content-between align-items-center">
                    {wish.course.discount_price === null ? (
                      <p className="card-price text-black font-weight-bold">
                        {wish.course.selling_price}$
                      </p>
                    ) : (
                      <p className="card-price text-black font-weight-bold">
                        {wish.course.discount_price}$
                        <span className="before-price font-weight-medium ml-2">
                          {wish.course.selling_price}$
                        </span>
                      </p>
                    )}

                    <div
                      className="icon-element icon-element-sm shadow-sm cursor-pointer"
                      title="Add to Wishlist"
                      onClick={(e) => toggleWishlist(e, wish.course.id)}
                    >
                      <i
                        className={`la ${
                          wishlists.includes(wish.course.id)
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
        })}
      </div>
      <div className="text-center pt-3">
        <nav aria-label="Page navigation example" className="pagination-box">
          <ul className="pagination justify-content-center">
            {wishlist.links.map((link, index) => (
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
          Showing {wishlist.from} - {wishlist.to} of {wishlist.total} results
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Wishlist;
