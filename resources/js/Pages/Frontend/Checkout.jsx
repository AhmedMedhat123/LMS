import MainLayout from '@/Layouts/MainLayout';
import { CAlert } from '@coreui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

const Checkout = ({
  auth,
  cartItems,
  coupon,
  cartTotalPrice,
  cartTotalDiscount,
}) => {
  const { post, get, data, setData, errors, processing } = useForm({
    name: auth.user.name,
    email: auth.user.email,
    phone: auth.user.phone || '',
    address: auth.user.address || '',
    coupon_name: '',
    total_amount: coupon ? coupon.total_amount : cartTotalPrice,
    payment_type: '',
    courses: cartItems.map((item) => ({
      slug: item.course.course_name_slug,
      course_id: item.course.id,
      course_title: item.course.course_name,
      price: item.course.discount_price || item.course.selling_price,
      instructor_id: item.course.instructor_id,
    })),
  });

  const GetCourseDetails = (e, courseId, sectionId) => {
    e.preventDefault();
    get(
      route('course.details', {
        id: courseId,
        slug: sectionId,
      })
    );
  };
  const applyCode = (e) => {
    e.preventDefault();
    post(route('user.coupon.apply', { coupon_name: data.coupon_name }), {
      preserveScroll: true,
    });
  };

  const removeCoupon = (e) => {
    e.preventDefault();
    post(route('user.coupon.remove'), {
      preserveScroll: true,
    });
  };

  useEffect(() => {
    if (coupon) {
      setData('total_amount', coupon.total_amount);
    }
  }, [coupon]);

  const handlePaymentMethodChange = (value) => {
    setData('payment_type', value);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    post(route('user.payment'));
  };

  return (
    <MainLayout>
      <section className="cart-area section--padding">
        <div className="container">
          <form onSubmit={handlePayment} className="row">
            <div className="row">
              <div className="col-lg-7">
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="card-title fs-22 pb-3">Billing Details</h3>
                    <div className="divider">
                      <span />
                    </div>
                    <div className="input-box col-lg-12">
                      <label className="label-text">Name</label>
                      <div className="form-group">
                        <input
                          className="form-control form--control"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={data.name}
                          onChange={(e) => setData('name', e.target.value)}
                        />
                        <span className="la la-user input-icon" />
                        {errors.name && (
                          <CAlert color="danger">{errors.name}</CAlert>
                        )}
                      </div>
                    </div>
                    {/* end input-box */}

                    <div className="input-box col-lg-12">
                      <label className="label-text">Email Address</label>
                      <div className="form-group">
                        <input
                          className="form-control form--control"
                          type="email"
                          name="email"
                          placeholder="Enter you email"
                          value={data.email}
                          onChange={(e) => setData('email', e.target.value)}
                        />
                        <span className="la la-envelope input-icon" />
                        {errors.email && (
                          <CAlert color="danger">{errors.email}</CAlert>
                        )}
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box col-lg-12">
                      <label className="label-text">Phone Number</label>
                      <div className="form-group">
                        <input
                          id="phone"
                          className="form-control form--control"
                          type="tel"
                          name="phone"
                          placeholder="Enter you phone number"
                          value={data.phone}
                          onChange={(e) => setData('phone', e.target.value)}
                        />
                        {errors.phone && (
                          <CAlert color="danger">{errors.phone}</CAlert>
                        )}
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box col-lg-12">
                      <label className="label-text">Address</label>
                      <div className="form-group">
                        <input
                          className="form-control form--control"
                          type="text"
                          name="text"
                          placeholder="e.g. 12345 Little Baker St, Melbourne"
                          value={data.address}
                          onChange={(e) => setData('address', e.target.value)}
                        />
                        <span className="la la-map-marker input-icon" />
                        {errors.address && (
                          <CAlert color="danger">{errors.address}</CAlert>
                        )}
                      </div>
                    </div>
                    {/* end input-box */}
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="card-title fs-22 pb-3">
                      Select Payment Method
                    </h3>
                    <div className="divider">
                      <span />
                    </div>
                    <div className="payment-option-wrap">
                      <div className="payment-tab">
                        <div className="payment-tab-toggle">
                          <input
                            id="direct_payment"
                            name="payment_method"
                            type="radio"
                            value="credit_card"
                            onChange={() =>
                              handlePaymentMethodChange('direct_payment')
                            }
                          />
                          <label htmlFor="direct_payment">Direct Payment</label>
                          {/* <img
                          className="payment-logo"
                          src="/assets/images/paypal.png"
                        /> */}
                        </div>
                      </div>
                      {/* end payment-tab */}
                      <div className="payment-tab">
                        <div className="payment-tab-toggle">
                          <input
                            type="radio"
                            name="payment_method"
                            id="stripe_payment"
                            value="stripe_payment"
                            onChange={() =>
                              handlePaymentMethodChange('stripe_payment')
                            }
                          />
                          <label htmlFor="stripe_payment">Stripe Payment</label>
                          {/* <img
                          className="payment-logo"
                          src="assets/images/payment-img.png"
                        /> */}
                        </div>
                      </div>
                      {/* end payment-tab */}
                    </div>
                    {errors.payment_type && (
                      <CAlert color="danger">{errors.payment_type}</CAlert>
                    )}
                  </div>
                  {/* end card-body */}
                </div>
                {!coupon && (
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="card-title fs-22 pb-3">Coupon</h3>
                      <div className="divider">
                        <span />
                      </div>
                      <div className="input-group mb-2">
                        <input
                          className="form-control form--control pl-3"
                          type="text"
                          name="search"
                          placeholder="Coupon code"
                          onChange={(e) =>
                            setData('coupon_name', e.target.value)
                          }
                        />
                        <div className="input-group-append">
                          <button
                            onClick={applyCode}
                            disabled={!data.coupon_name.trim()}
                            className="btn theme-btn"
                          >
                            Apply Code
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* end card-body */}
                    {errors.coupon_name && (
                      <CAlert color="danger">{errors.coupon_name}</CAlert>
                    )}
                  </div>
                )}
                {/* end card */}
              </div>
              {/* end col-lg-7 */}
              <div className="col-lg-5">
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="card-title fs-22 pb-3">Order Details</h3>
                    <div className="divider">
                      <span />
                    </div>
                    <div className="order-details-lists">
                      {cartItems.map((cart, index) => (
                        <div key={index}>
                          <input
                            type="hidden"
                            name={`slug[${index}]`}
                            value={cart.course.course_name_slug}
                          />
                          <input
                            type="hidden"
                            name={`course_id[${index}]`}
                            value={cart.course.id}
                          />
                          <input
                            type="hidden"
                            name={`course_title[${index}]`}
                            value={cart.course.course_name}
                          />
                          <input
                            type="hidden"
                            name={`price[${index}]`}
                            value={
                              cart.course.discount_price ||
                              cart.course.selling_price
                            }
                          />
                          <input
                            type="hidden"
                            name={`instructor_id[${index}]`}
                            value={cart.course.instructor_id}
                          />

                          <div
                            key={index}
                            className="media media-card border-bottom border-bottom-gray pb-3 mb-3"
                          >
                            <Link
                              onClick={(e) =>
                                GetCourseDetails(
                                  e,
                                  cart.course.id,
                                  cart.course.course_name_slug
                                )
                              }
                              className="media-img"
                            >
                              <img
                                src={
                                  cart.course.course_image
                                    ? `/upload/course/image/${cart.course.course_image}`
                                    : '/images/no-image'
                                }
                                alt="Cart image"
                              />
                            </Link>
                            <div className="media-body">
                              <h5 className="fs-15 pb-2">
                                <Link
                                  onClick={(e) =>
                                    GetCourseDetails(
                                      e,
                                      cart.course.id,
                                      cart.course.course_name_slug
                                    )
                                  }
                                >
                                  {cart.course.course_name}
                                </Link>
                              </h5>
                              {cart.course.discount_price ? (
                                <>
                                  <p className="text-black font-weight-semi-bold lh-18">
                                    ${cart.course.discount_price}{' '}
                                    <span className="before-price fs-14">
                                      ${cart.course.selling_price}
                                    </span>
                                  </p>
                                </>
                              ) : (
                                <p className="text-black font-weight-semi-bold lh-18">
                                  ${cart.course.selling_price}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* end media */}
                    </div>
                    {/* end order-details-lists */}
                    <Link href={route('user.cart.all')} className="btn-text">
                      <i className="la la-edit mr-1" />
                      Edit
                    </Link>
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="card-title fs-22 pb-3">Order Summary</h3>
                    <div className="divider">
                      <span />
                    </div>
                    {!coupon ? (
                      <ul className="generic-list-item generic-list-item-flash fs-15">
                        <li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
                          <span className="text-black">Discount:</span>
                          <span className="before-price">
                            {cartTotalDiscount === 0
                              ? ''
                              : `$${cartTotalDiscount}`}
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between font-weight-bold">
                          <span className="text-black">Price:</span>
                          <span>${cartTotalPrice}</span>
                        </li>
                      </ul>
                    ) : (
                      <ul className="generic-list-item generic-list-item-flash fs-15">
                        <li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
                          <span className="text-black">Coupon Name:</span>
                          <span className="flex gap-1 items-center">
                            {coupon.coupon_name}
                            <Link
                              onClick={(e) => removeCoupon(e)}
                              className="la la-trash text-red-500 hover:text-red-700 hover:text-lg"
                            />
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
                          <span className="text-black">Coupon discounts:</span>
                          <span>{coupon.coupon_discount}%</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between font-weight-bold">
                          <span className="text-black">Course Discount:</span>
                          <span className="before-price">
                            {cartTotalDiscount === 0
                              ? ''
                              : `$${cartTotalDiscount}`}
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between font-weight-bold">
                          <span className="text-black">Price:</span>
                          <span className="text-green-500">
                            ${coupon.total_amount}
                          </span>{' '}
                        </li>
                      </ul>
                    )}
                    <div className="btn-box border-top border-top-gray pt-3">
                      <button type="submit" className="btn theme-btn w-100">
                        Proceed <i className="la la-arrow-right icon ml-1" />
                      </button>
                    </div>
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
              </div>
              {/* end col-lg-5 */}
            </div>
          </form>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </MainLayout>
  );
};

export default Checkout;
