import { Link, useForm, usePage } from '@inertiajs/react';
import { useSidebarContext } from './SidebarContext';
const Header = ({ user }) => {
  const { sidebarActive, setSidebarActive } = useSidebarContext();
  const { get, post } = useForm();

  const { cartItems, cartTotalPrice, cartTotalDiscount, mycourse } =
    usePage().props;

  const handleLogout = (e) => {
    e.preventDefault();
    post(route('user.logout'));
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    get(route('user.profile.edit'));
  };

  const deleteFromCart = (e, catId) => {
    e.preventDefault();
    post(route('user.cart.delete', catId), {
      preserveScroll: true,
    });
  };

  const goToCart = (e) => {
    e.preventDefault();
    get(route('user.cart.all'));
  };

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
    <>
      <header className="header-menu-area">
        <div className="header-menu-content dashboard-menu-content pr-30px pl-30px bg-white shadow-sm">
          <div className="container-fluid">
            <div className="main-menu-content">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="logo-box logo--box">
                    <a href={route('index')} className="logo">
                      <img src="/assets/images/logo.png" alt="logo" />
                    </a>
                    <div className="user-btn-action">
                      <div
                        onClick={() => setSidebarActive(true)}
                        className="dashboard-menu-toggler btn theme-btn theme-btn-sm lh-28 theme-btn-transparent"
                      >
                        <i className="la la-bars mr-1" /> Dashboard Nav
                      </div>
                    </div>
                  </div>
                  {/* end logo-box */}
                  <div className="menu-wrapper">
                    <form method="post" className="mr-auto ml-0">
                      <div className="form-group mb-0">
                        <input
                          className="form-control form--control form--control-gray pl-3"
                          type="text"
                          name="search"
                          placeholder="Search for anything"
                        />
                        <span className="la la-search search-icon" />
                      </div>
                    </form>
                    <div className="nav-right-button d-flex align-items-center">
                      <div className="user-action-wrap d-flex align-items-center">
                        <div className="shop-cart course-cart pr-3 mr-3 border-right border-right-gray">
                          <ul>
                            <li className="relative group">
                              <button className="shop-cart-btn d-flex align-items-center fs-16">
                                My Courses
                                <span className="la la-angle-down fs-13 ml-1" />
                              </button>
                              <ul className="cart-dropdown-menu absolute hidden group-hover:block bg-white shadow-md rounded-md p-3 w-64">
                                {mycourse.length === 0 ? (
                                  <li className="p-2 text-gray-600">
                                    You have no course
                                  </li>
                                ) : (
                                  mycourse.map((item, index) => (
                                    <li
                                      key={index}
                                      className="media media-card flex items-center p-2"
                                    >
                                      <Link
                                        onClick={(e) =>
                                          viewCourse(
                                            e,
                                            item.course.id,
                                            item.course.course_name_slug
                                          )
                                        }
                                        className="media-img"
                                      >
                                        <img
                                          className="mr-3 w-12 h-12 rounded-md"
                                          src={
                                            item.course.course_image
                                              ? `/upload/course/image/${item.course.course_image}`
                                              : 'assets/images/img-loading.png'
                                          }
                                          alt="Course image"
                                        />
                                      </Link>
                                      <div className="media-body ml-2">
                                        <h5 className="text-sm font-semibold">
                                          <Link
                                            onClick={(e) =>
                                              viewCourse(
                                                e,
                                                item.course.id,
                                                item.course.course_name_slug
                                              )
                                            }
                                          >
                                            {item.course.course_name}
                                          </Link>
                                        </h5>
                                        <div className="skillbar-box pt-2">
                                          <div
                                            className="skillbar skillbar-skillbar"
                                            data-percent="36%"
                                          >
                                            <div className="skillbar-bar skillbar--bar bg-1" />
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))
                                )}
                                <li className="mt-2">
                                  <Link
                                    href={route('user.my.courses')}
                                    className="btn theme-btn text-white mt-3 p-3 w-100"
                                  >
                                    Got to my courses{' '}
                                    <i className="la la-arrow-right icon ml-1" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        {/* end course-cart */}
                        <div className="shop-cart pr-3 mr-3 border-right border-right-gray">
                          <ul>
                            <li>
                              <p className="shop-cart-btn d-flex align-items-center">
                                <i className="la la-shopping-cart fs-22" />
                                {cartItems ? (
                                  <span className="product-count">
                                    {cartItems.length}
                                  </span>
                                ) : (
                                  ''
                                )}
                              </p>
                              <ul className="cart-dropdown-menu">
                                {cartItems.map((cart, index) => (
                                  <li key={index} className="media media-card">
                                    <a
                                      href="shopping-cart.html"
                                      className="media-img"
                                    >
                                      <img
                                        src={
                                          cart.course.course_image
                                            ? `/upload/course/image/${cart.course.course_image}`
                                            : 'assets/images/img-loading.png'
                                        }
                                        alt="Cart image"
                                      />
                                    </a>
                                    <div className="media-body flex justify-between items-center">
                                      <div className="flex-1">
                                        <h5 className="truncate w-40">
                                          {' '}
                                          {/* Adjust width as needed */}
                                          <a
                                            href="course-details.html"
                                            title={cart.course.course_name}
                                          >
                                            {cart.course.course_name.length > 25
                                              ? cart.course.course_name.substring(
                                                  0,
                                                  22
                                                ) + '...'
                                              : cart.course.course_name}
                                          </a>
                                        </h5>
                                        <span className="d-block text-gray-500 text-sm py-1">
                                          {cart.instructor.name}
                                        </span>
                                        {cart.course.discount_price === null ? (
                                          <p className="text-black font-semibold text-lg">
                                            {cart.course.selling_price}$
                                          </p>
                                        ) : (
                                          <p className="text-black font-semibold text-lg">
                                            {cart.course.discount_price}$
                                            <span className="before-price text-gray-400 line-through ml-2 text-sm">
                                              {cart.course.selling_price}$
                                            </span>
                                          </p>
                                        )}
                                      </div>
                                      <Link
                                        onClick={(e) =>
                                          deleteFromCart(e, cart.id)
                                        }
                                        className="text-red-500 hover:text-red-800 transition"
                                      >
                                        <i className="la la-trash text-xl"></i>
                                      </Link>
                                    </div>
                                  </li>
                                ))}
                                <li className="media media-card">
                                  <div className="media-body fs-16">
                                    <p className="text-black font-weight-semi-bold lh-18">
                                      Total:{' '}
                                      <span className="cart-total">
                                        ${cartTotalPrice}
                                      </span>{' '}
                                      <span className="before-price fs-14">
                                        {cartTotalDiscount === 0
                                          ? ''
                                          : `$${cartTotalDiscount}`}
                                      </span>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    onClick={(e) => goToCart(e)}
                                    className="btn theme-btn w-100"
                                  >
                                    Got to cart{' '}
                                    <i className="la la-arrow-right icon ml-1" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        {/* end shop-cart */}
                        <div className="shop-cart wishlist-cart pr-3 mr-3 border-right border-right-gray">
                          <ul>
                            <li>
                              <p className="shop-cart-btn">
                                <i className="la la-heart-o" />
                                <span className="dot-status bg-1" />
                              </p>
                              <ul className="cart-dropdown-menu after-none">
                                <li>
                                  <div className="media media-card">
                                    <a
                                      href="course-details.html"
                                      className="media-img"
                                    >
                                      <img
                                        className="mr-3"
                                        src="/assets/images/small-img.jpg"
                                        alt="Cart image"
                                      />
                                    </a>
                                    <div className="media-body">
                                      <h5>
                                        <a href="course-details.html">
                                          The Complete JavaScript Course 2021:
                                          From Zero to Expert!
                                        </a>
                                      </h5>
                                      <span className="d-block lh-18 py-1">
                                        Kamran Ahmed
                                      </span>
                                      <p className="text-black font-weight-semi-bold lh-18">
                                        $12.99{' '}
                                        <span className="before-price fs-14">
                                          $129.99
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <a
                                    href="#"
                                    className="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 w-100 mt-3"
                                  >
                                    Add to cart{' '}
                                    <i className="la la-arrow-right icon ml-1" />
                                  </a>
                                </li>
                                <li>
                                  <div className="media media-card">
                                    <a
                                      href="course-details.html"
                                      className="media-img"
                                    >
                                      <img
                                        className="mr-3"
                                        src="/assets/images/small-img.jpg"
                                        alt="Cart image"
                                      />
                                    </a>
                                    <div className="media-body">
                                      <h5>
                                        <a href="course-details.html">
                                          The Complete JavaScript Course 2021:
                                          From Zero to Expert!
                                        </a>
                                      </h5>
                                      <span className="d-block lh-18 py-1">
                                        Kamran Ahmed
                                      </span>
                                      <p className="text-black font-weight-semi-bold lh-18">
                                        $12.99{' '}
                                        <span className="before-price fs-14">
                                          $129.99
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <a
                                    href="#"
                                    className="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 w-100 mt-3"
                                  >
                                    Add to cart{' '}
                                    <i className="la la-arrow-right icon ml-1" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="my-courses.html"
                                    className="btn theme-btn w-100"
                                  >
                                    Got to wishlist{' '}
                                    <i className="la la-arrow-right icon ml-1" />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        {/* end shop-cart */}
                        <div className="shop-cart notification-cart pr-3 mr-3 border-right border-right-gray">
                          <ul>
                            <li>
                              <p className="shop-cart-btn">
                                <i className="la la-bell" />
                                <span className="dot-status bg-1" />
                              </p>
                              <ul className="cart-dropdown-menu after-none p-0 notification-dropdown-menu">
                                <li className="menu-heading-block d-flex align-items-center justify-content-between">
                                  <h4>Notifications</h4>
                                  <span className="ribbon fs-14">18</span>
                                </li>
                                <li>
                                  <div className="notification-body">
                                    <a
                                      href="dashboard.html"
                                      className="media media-card align-items-center"
                                    >
                                      <div className="icon-element icon-element-sm flex-shrink-0 bg-1 mr-3 text-white">
                                        <i className="la la-bolt" />
                                      </div>
                                      <div className="media-body">
                                        <h5>Your resume updated!</h5>
                                        <span className="d-block lh-18 pt-1 text-gray fs-13">
                                          1 hour ago
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="dashboard.html"
                                      className="media media-card align-items-center"
                                    >
                                      <div className="icon-element icon-element-sm flex-shrink-0 bg-2 mr-3 text-white">
                                        <i className="la la-lock" />
                                      </div>
                                      <div className="media-body">
                                        <h5>You changed password</h5>
                                        <span className="d-block lh-18 pt-1 text-gray fs-13">
                                          November 12, 2019
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="dashboard.html"
                                      className="media media-card align-items-center"
                                    >
                                      <div className="icon-element icon-element-sm flex-shrink-0 bg-3 mr-3 text-white">
                                        <i className="la la-user" />
                                      </div>
                                      <div className="media-body">
                                        <h5>
                                          Your account has been created
                                          successfully
                                        </h5>
                                        <span className="d-block lh-18 pt-1 text-gray fs-13">
                                          November 12, 2019
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </li>
                                <li className="menu-heading-block">
                                  <a
                                    href="dashboard.html"
                                    className="btn theme-btn w-100"
                                  >
                                    Show All Notifications{' '}
                                    <i className="la la-arrow-right icon ml-1" />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        {/* end shop-cart */}
                        <div className="shop-cart user-profile-cart">
                          <ul>
                            <li>
                              <div className="shop-cart-btn">
                                <div className="avatar-xs">
                                  <img
                                    className="rounded-full img-fluid"
                                    src={
                                      user?.photo
                                        ? `/upload/users_images/${user?.photo}`
                                        : '/images/user_placeholder.png'
                                    }
                                    alt="User image"
                                  />
                                </div>
                                <span className="dot-status bg-1" />
                              </div>
                              <ul className="cart-dropdown-menu after-none p-0 notification-dropdown-menu">
                                <li className="menu-heading-block d-flex align-items-center">
                                  <a
                                    href="teacher-detail.html"
                                    className="avatar-sm flex-shrink-0 d-block"
                                  >
                                    <img
                                      className="rounded-full img-fluid"
                                      src={
                                        user?.photo
                                          ? `/upload/users_images/${user.photo}`
                                          : '/images/user_placeholder.png'
                                      }
                                      alt="User image"
                                    />
                                  </a>
                                  <div className="ml-2">
                                    <h4>
                                      <a
                                        href="teacher-detail.html"
                                        className="text-black"
                                      >
                                        {user?.name}
                                      </a>
                                    </h4>
                                    <span className="d-block fs-14 lh-20">
                                      {user?.email}
                                    </span>
                                  </div>
                                </li>

                                <li>
                                  <ul className="generic-list-item">
                                    <li>
                                      <a href="my-courses.html">
                                        <i className="la la-file-video-o mr-1" />{' '}
                                        My courses
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shopping-cart.html">
                                        <i className="la la-shopping-basket mr-1" />{' '}
                                        My cart
                                      </a>
                                    </li>
                                    <li>
                                      <a href="my-courses.html">
                                        <i className="la la-heart-o mr-1" /> My
                                        wishlist
                                      </a>
                                    </li>
                                    <li>
                                      <div className="section-block" />
                                    </li>
                                    <li>
                                      <a href="dashboard.html">
                                        <i className="la la-bell mr-1" />{' '}
                                        Notifications
                                        <span className="badge bg-info text-white ml-2 p-1">
                                          9+
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="dashboard-message.html">
                                        <i className="la la-envelope mr-1" />{' '}
                                        Messages
                                        <span className="badge bg-info text-white ml-2 p-1">
                                          12+
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <div className="section-block" />
                                    </li>
                                    <li>
                                      <a href="dashboard-settings.html">
                                        <i className="la la-gear mr-1" />{' '}
                                        Settings
                                      </a>
                                    </li>
                                    <li>
                                      <a href="dashboard-purchase-history.html">
                                        <i className="la la-history mr-1" />{' '}
                                        Purchase history
                                      </a>
                                    </li>
                                    <li>
                                      <div className="section-block" />
                                    </li>
                                    <li>
                                      <a href="student-detail.html">
                                        <i className="la la-user mr-1" /> Public
                                        profile
                                      </a>
                                    </li>
                                    <li>
                                      <Link onClick={handleEditProfile}>
                                        <i className="la la-edit mr-1" /> Edit
                                        profile
                                      </Link>
                                    </li>
                                    <li>
                                      <div className="section-block" />
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="la la-question mr-1" />{' '}
                                        Help
                                      </a>
                                    </li>
                                    <li>
                                      <Link onClick={handleLogout}>
                                        <i className="la la-power-off mr-1" />{' '}
                                        Logout
                                      </Link>
                                    </li>
                                    <li>
                                      <div className="section-block" />
                                    </li>
                                    <li>
                                      <a href="#" className="position-relative">
                                        <span className="fs-17 font-weight-semi-bold d-block">
                                          Aduca for Business
                                        </span>
                                        <span className="lh-20 d-block fs-14 text-gray">
                                          Bring learning to your company
                                        </span>
                                        <span className="position-absolute top-0 right-0 mt-3 mr-3 fs-18 text-gray">
                                          <i className="la la-external-link" />
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        {/* end shop-cart */}
                      </div>
                    </div>
                    {/* end nav-right-button */}
                  </div>
                  {/* end menu-wrapper */}
                </div>
                {/* end col-lg-10 */}
              </div>
              {/* end row */}
            </div>
          </div>
          {/* end container-fluid */}
        </div>
        {/* end header-menu-content */}
        <div className="off-canvas-menu custom-scrollbar-styled main-off-canvas-menu">
          <div
            className="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
            data-toggle="tooltip"
            data-placement="left"
            title="Close menu"
          >
            <i className="la la-times" />
          </div>
          {/* end off-canvas-menu-close */}
          <h4 className="off-canvas-menu-heading pt-90px">Alerts</h4>
          <ul className="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray">
            <li>
              <a href="dashboard.html">Notifications</a>
            </li>
            <li>
              <a href="dashboard-message.html">Messages</a>
            </li>
            <li>
              <a href="my-courses.html">Wishlist</a>
            </li>
            <li>
              <a href="shopping-cart.html">My cart</a>
            </li>
          </ul>
          <h4 className="off-canvas-menu-heading pt-20px">Account</h4>
          <ul className="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray">
            <li>
              <a href="dashboard-settings.html">Account settings</a>
            </li>
            <li>
              <a href="dashboard-purchase-history.html">Purchase history</a>
            </li>
          </ul>
          <h4 className="off-canvas-menu-heading pt-20px">Profile</h4>
          <ul className="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray">
            <li>
              <a href="student-detail.html">Public profile</a>
            </li>
            <li>
              <a href="dashboard-settings.html">Edit profile</a>
            </li>
            <li>
              <a href="index.html">Log out</a>
            </li>
          </ul>
          <h4 className="off-canvas-menu-heading pt-20px">More from Aduca</h4>
          <ul className="generic-list-item off-canvas-menu-list pt-1">
            <li>
              <a href="for-business.html">Aduca for Business</a>
            </li>
            <li>
              <a href="#">Get the app</a>
            </li>
            <li>
              <a href="invite.html">Invite friends</a>
            </li>
            <li>
              <a href="contact.html">Help</a>
            </li>
          </ul>
          <div className="theme-picker d-flex align-items-center justify-content-center mt-4 px-3">
            <button
              className="theme-picker-btn dark-mode-btn btn theme-btn-sm theme-btn-white w-100 font-weight-semi-bold justify-content-center"
              title="Dark mode"
            >
              <svg
                className="mr-1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              Dark Mode
            </button>
            <button
              className="theme-picker-btn light-mode-btn btn theme-btn-sm theme-btn-white w-100 font-weight-semi-bold justify-content-center"
              title="Light mode"
            >
              <svg
                className="mr-1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={5} />
                <line x1={12} y1={1} x2={12} y2={3} />
                <line x1={12} y1={21} x2={12} y2={23} />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1={1} y1={12} x2={3} y2={12} />
                <line x1={21} y1={12} x2={23} y2={12} />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              Light Mode
            </button>
          </div>
        </div>
        {/* end off-canvas-menu */}
        <div className="off-canvas-menu custom-scrollbar-styled category-off-canvas-menu">
          <div
            className="off-canvas-menu-close cat-menu-close icon-element icon-element-sm shadow-sm"
            data-toggle="tooltip"
            data-placement="left"
            title="Close menu"
          >
            <i className="la la-times" />
          </div>
          {/* end off-canvas-menu-close */}
          <h4 className="off-canvas-menu-heading pt-90px">Learn</h4>
          <ul className="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray">
            <li>
              <a href="my-courses.html">My learning</a>
            </li>
          </ul>
          <h4 className="off-canvas-menu-heading pt-20px">Categories</h4>
          <ul className="generic-list-item off-canvas-menu-list pt-1">
            <li>
              <a href="course-grid.html">Development</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All Development</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Mobile Apps</a>
                </li>
                <li>
                  <a href="#">Game Development</a>
                </li>
                <li>
                  <a href="#">Databases</a>
                </li>
                <li>
                  <a href="#">Programming Languages</a>
                </li>
                <li>
                  <a href="#">Software Testing</a>
                </li>
                <li>
                  <a href="#">Software Engineering</a>
                </li>
                <li>
                  <a href="#">E-Commerce</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">business</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All Business</a>
                </li>
                <li>
                  <a href="#">Finance</a>
                </li>
                <li>
                  <a href="#">Entrepreneurship</a>
                </li>
                <li>
                  <a href="#">Strategy</a>
                </li>
                <li>
                  <a href="#">Real Estate</a>
                </li>
                <li>
                  <a href="#">Home Business</a>
                </li>
                <li>
                  <a href="#">Communications</a>
                </li>
                <li>
                  <a href="#">Industry</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">IT &amp; Software</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All IT &amp; Software</a>
                </li>
                <li>
                  <a href="#">IT Certification</a>
                </li>
                <li>
                  <a href="#">Hardware</a>
                </li>
                <li>
                  <a href="#">Network &amp; Security</a>
                </li>
                <li>
                  <a href="#">Operating Systems</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">Finance &amp; Accounting</a>
              <ul className="sub-menu">
                <li>
                  <a href="#"> All Finance &amp; Accounting</a>
                </li>
                <li>
                  <a href="#">Accounting &amp; Bookkeeping</a>
                </li>
                <li>
                  <a href="#">Cryptocurrency &amp; Blockchain</a>
                </li>
                <li>
                  <a href="#">Economics</a>
                </li>
                <li>
                  <a href="#">Investing &amp; Trading</a>
                </li>
                <li>
                  <a href="#">Other Finance &amp; Economics</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">design</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All Design</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Design Tools</a>
                </li>
                <li>
                  <a href="#">3D &amp; Animation</a>
                </li>
                <li>
                  <a href="#">User Experience</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">Personal Development</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All Personal Development</a>
                </li>
                <li>
                  <a href="#">Personal Transformation</a>
                </li>
                <li>
                  <a href="#">Productivity</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Personal Finance</a>
                </li>
                <li>
                  <a href="#">Career Development</a>
                </li>
                <li>
                  <a href="#">Parenting &amp; Relationships</a>
                </li>
                <li>
                  <a href="#">Happiness</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">Marketing</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All Marketing</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Search Engine Optimization</a>
                </li>
                <li>
                  <a href="#">Social Media Marketing</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Video &amp; Mobile Marketing</a>
                </li>
                <li>
                  <a href="#">Affiliate Marketing</a>
                </li>
                <li>
                  <a href="#">Growth Hacking</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">Health &amp; Fitness</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All Health &amp; Fitness</a>
                </li>
                <li>
                  <a href="#">Fitness</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Dieting</a>
                </li>
                <li>
                  <a href="#">Self Defense</a>
                </li>
                <li>
                  <a href="#">Meditation</a>
                </li>
                <li>
                  <a href="#">Mental Health</a>
                </li>
                <li>
                  <a href="#">Yoga</a>
                </li>
                <li>
                  <a href="#">Dance</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="course-grid.html">Photography</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">All Photography</a>
                </li>
                <li>
                  <a href="#">Digital Photography</a>
                </li>
                <li>
                  <a href="#">Photography Fundamentals</a>
                </li>
                <li>
                  <a href="#">Commercial Photography</a>
                </li>
                <li>
                  <a href="#">Video Design</a>
                </li>
                <li>
                  <a href="#">Photography Tools</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* end off-canvas-menu */}
        <div className="mobile-search-form">
          <div className="d-flex align-items-center">
            <form method="post" className="flex-grow-1 mr-3">
              <div className="form-group mb-0">
                <input
                  className="form-control form--control pl-3"
                  type="text"
                  name="search"
                  placeholder="Search for anything"
                />
                <span className="la la-search search-icon" />
              </div>
            </form>
            <div className="search-bar-close icon-element icon-element-sm shadow-sm">
              <i className="la la-times" />
            </div>
            {/* end off-canvas-menu-close */}
          </div>
        </div>
        {/* end mobile-search-form */}
        <div
          className={`body-overlay  ${sidebarActive ? 'active' : ''}`}
          onClick={() => setSidebarActive(false)}
        />
      </header>
    </>
  );
};

export default Header;
