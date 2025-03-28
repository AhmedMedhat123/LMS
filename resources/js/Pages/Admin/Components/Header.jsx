import { useSidebarContext } from '@/Pages/Frontend/Dashboard/Components/SidebarContext';
import { Link, useForm, usePage } from '@inertiajs/react';

const Header = ({ admin }) => {
  const { sidebarActive, setSidebarActive } = useSidebarContext();
  const { get, post } = useForm();
  const { allCategories, cartItems, cartTotalPrice, cartTotalDiscount } =
    usePage().props;

  const handleLogout = (e) => {
    e.preventDefault();
    post(route('admin.logout'));
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    get(route('admin.profile.edit'));
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
                                      admin?.photo
                                        ? `/upload/admin_images/${admin?.photo}`
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
                                        admin?.photo
                                          ? `/upload/admin_images/${admin.photo}`
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
                                        {admin?.name}
                                      </a>
                                    </h4>
                                    <span className="d-block fs-14 lh-20">
                                      {admin?.email}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
