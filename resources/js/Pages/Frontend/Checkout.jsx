import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm, usePage } from '@inertiajs/react';

const Checkout = ({
  auth,
  cartItems,
  coupon,
  cartTotalPrice,
  cartTotalDiscount,
}) => {
  console.log(usePage().props.coupon);

  const { get, data, setData, processing } = useForm({
    name: auth.user.name,
    email: auth.user.email,
    phone: auth.user.phone,
    address: auth.user.address,
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

  return (
    <MainLayout>
      <section className="cart-area section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="card card-item">
                <div className="card-body">
                  <h3 className="card-title fs-22 pb-3">Billing Details</h3>
                  <div className="divider">
                    <span />
                  </div>
                  <form method="post" className="row">
                    <div className="input-box col-lg-12">
                      <label className="label-text">Name</label>
                      <div className="form-group">
                        <input
                          className="form-control form--control"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={data.name}
                        />
                        <span className="la la-user input-icon" />
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
                        />
                        <span className="la la-envelope input-icon" />
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
                        />
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
                        />
                        <span className="la la-map-marker input-icon" />
                      </div>
                    </div>
                    {/* end input-box */}
                  </form>
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
                          id="paypal"
                          name="radio"
                          type="radio"
                          defaultValue="paypal"
                        />
                        <label htmlFor="paypal">PayPal</label>
                        <img
                          className="payment-logo"
                          src="/assets/images/paypal.png"
                          alt
                        />
                      </div>
                      <div className="payment-tab-content">
                        <p className="fs-15 lh-24">
                          In order to complete your transaction, we will
                          transfer you over to PayPal's secure servers.
                        </p>
                      </div>
                    </div>
                    {/* end payment-tab */}
                    <div className="payment-tab">
                      <div className="payment-tab-toggle">
                        <input
                          type="radio"
                          name="radio"
                          id="creditCart"
                          defaultValue="creditCard"
                        />
                        <label htmlFor="creditCart">Credit / Debit Card</label>
                        <img
                          className="payment-logo"
                          src="assets/images/payment-img.png"
                          alt
                        />
                      </div>
                      <div className="payment-tab-content">
                        <form action="#" className="row">
                          <div className="input-box col-lg-6">
                            <label className="label-text">Name on Card</label>
                            <div className="form-group">
                              <input
                                className="form-control form--control pl-3"
                                type="text"
                                name="text"
                                placeholder="Card Name"
                              />
                            </div>
                          </div>
                          <div className="input-box col-lg-6">
                            <label className="label-text">Card Number</label>
                            <div className="form-group">
                              <input
                                className="form-control form--control pl-3"
                                type="text"
                                name="text"
                                placeholder="1234  5678  9876  5432"
                              />
                            </div>
                          </div>
                          <div className="input-box col-lg-4">
                            <label className="label-text">Expiry Month</label>
                            <div className="form-group">
                              <input
                                className="form-control form--control pl-3"
                                type="text"
                                name="text"
                                placeholder="MM"
                              />
                            </div>
                          </div>
                          <div className="input-box col-lg-4">
                            <label className="label-text">Expiry Year</label>
                            <div className="form-group">
                              <input
                                className="form-control form--control pl-3"
                                type="text"
                                name="text"
                                placeholder="YY"
                              />
                            </div>
                          </div>
                          <div className="input-box col-lg-4">
                            <label className="label-text">CVV</label>
                            <div className="form-group">
                              <input
                                className="form-control form--control pl-3"
                                type="text"
                                name="text"
                                placeholder="cvv"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* end payment-tab */}
                  </div>
                </div>
                {/* end card-body */}
              </div>
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
                      <div className="media media-card border-bottom border-bottom-gray pb-3 mb-3">
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
                        <span>
                          {cartTotalDiscount === 0
                            ? ''
                            : `$${cartTotalDiscount}`}
                        </span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between font-weight-bold">
                        <span className="text-black">Total:</span>
                        <span>${cartTotalPrice}</span>
                      </li>
                    </ul>
                  ) : (
                    <ul className="generic-list-item generic-list-item-flash fs-15">
                      <li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
                        <span className="text-black">Coupon Name:</span>
                        <span>{coupon.coupon_name}</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
                        <span className="text-black">Coupon discounts:</span>
                        <span>{coupon.coupon_discount}%</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between font-weight-bold">
                        <span className="text-black">Total:</span>
                        <span>$18.99</span>
                      </li>
                    </ul>
                  )}
                  <div className="btn-box border-top border-top-gray pt-3">
                    <a href="checkout.html" className="btn theme-btn w-100">
                      Proceed <i className="la la-arrow-right icon ml-1" />
                    </a>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-5 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </MainLayout>
  );
};

export default Checkout;
