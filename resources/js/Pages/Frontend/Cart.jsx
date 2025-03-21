import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm, usePage } from '@inertiajs/react';

const Cart = () => {
  const { post } = useForm();

  const { cartItems, cartTotalPrice, cartTotalDiscount } = usePage().props;

  const deleteFromCart = (e, catId) => {
    e.preventDefault();
    post(route('user.cart.delete', catId), {
      preserveScroll: true,
    });
  };
  return (
    <MainLayout>
      <section className="cart-area section-padding">
        <div className="container">
          <div className="table-responsive">
            <table className="table generic-table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <div className="media media-card">
                        <a
                          href="course-details.html"
                          className="media-img mr-0"
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
                      </div>
                    </th>
                    <td>
                      <a
                        href="course-details.html"
                        className="text-black font-weight-semi-bold"
                      >
                        {cart.course.course_name}
                      </a>
                    </td>
                    <td>
                      <ul className="generic-list-item font-weight-semi-bold">
                        {cart.course.discount_price ? (
                          <>
                            <li className="text-black lh-18">
                              ${cart.course.discount_price}
                            </li>
                            <li className="before-price lh-18">
                              {' '}
                              ${cart.course.selling_price}
                            </li>
                          </>
                        ) : (
                          <li className="text-black lh-18">
                            ${cart.course.selling_price}
                          </li>
                        )}
                      </ul>
                    </td>

                    <td>
                      <Link
                        onClick={(e) => deleteFromCart(e, cart.id)}
                        className="icon-element icon-element-xs shadow-sm border-0"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Remove"
                      >
                        <i className="la la-times" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex flex-wrap align-items-center justify-content-between pt-4">
              <form method="post">
                <div className="input-group mb-2">
                  <input
                    className="form-control form--control pl-3"
                    type="text"
                    name="search"
                    placeholder="Coupon code"
                  />
                  <div className="input-group-append">
                    <button className="btn theme-btn">Apply Code</button>
                  </div>
                </div>
              </form>
              <a href="#" className="btn theme-btn mb-2">
                Update Cart
              </a>
            </div>
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="bg-gray p-4 rounded-rounded mt-40px">
              <h3 className="fs-18 font-weight-bold pb-3">Cart Totals</h3>
              <div className="divider">
                <span />
              </div>
              <ul className="generic-list-item pb-4">
                <li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
                  <span className="text-black">Discount:</span>
                  <span className="before-price">
                    {cartTotalDiscount === 0 ? '' : `$${cartTotalDiscount}`}
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
                  <span className="text-black">Total:</span>
                  <span> ${cartTotalPrice}</span>
                </li>
              </ul>
              <a href="checkout.html" className="btn theme-btn w-100">
                Checkout <i className="la la-arrow-right icon ml-1" />
              </a>
            </div>
          </div>
        </div>
        {/* end container */}
      </section>
    </MainLayout>
  );
};

export default Cart;
