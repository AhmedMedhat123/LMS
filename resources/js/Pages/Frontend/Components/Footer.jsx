import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="footer-area pt-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 responsive-column-half">
                            <div className="footer-item">
                                <a href="index.html">
                                    <img src="assets/images/logo.png" alt="footer logo" className="footer__logo" />
                                </a>
                                <ul className="generic-list-item pt-4">
                                    <li><a href="tel:+1631237884">+163 123 7884</a></li>
                                    <li><a href="mailto:support@wbsite.com">support@website.com</a></li>
                                    <li>Melbourne, Australia, 105 South Park Avenue</li>
                                </ul>
                                <h3 className="fs-20 font-weight-semi-bold pt-4 pb-2">We are on</h3>
                                <ul className="social-icons social-icons-styled">
                                    <li className="mr-1"><a href="#" className="facebook-bg"><i className="la la-facebook" /></a></li>
                                    <li className="mr-1"><a href="#" className="twitter-bg"><i className="la la-twitter" /></a></li>
                                    <li className="mr-1"><a href="#" className="instagram-bg"><i className="la la-instagram" /></a></li>
                                    <li className="mr-1"><a href="#" className="linkedin-bg"><i className="la la-linkedin" /></a></li>
                                </ul>
                            </div>{/* end footer-item */}
                        </div>{/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column-half">
                            <div className="footer-item">
                                <h3 className="fs-20 font-weight-semi-bold">Company</h3>
                                <span className="section-divider section--divider" />
                                <ul className="generic-list-item">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Become a Teacher</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>{/* end footer-item */}
                        </div>{/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column-half">
                            <div className="footer-item">
                                <h3 className="fs-20 font-weight-semi-bold">Courses</h3>
                                <span className="section-divider section--divider" />
                                <ul className="generic-list-item">
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">Hacking</a></li>
                                    <li><a href="#">PHP Learning</a></li>
                                    <li><a href="#">Spoken English</a></li>
                                    <li><a href="#">Self-Driving Car</a></li>
                                    <li><a href="#">Garbage Collectors</a></li>
                                </ul>
                            </div>{/* end footer-item */}
                        </div>{/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column-half">
                            <div className="footer-item">
                                <h3 className="fs-20 font-weight-semi-bold">Download App</h3>
                                <span className="section-divider section--divider" />
                                <div className="mobile-app">
                                    <p className="pb-3 lh-24">Download our mobile app and learn on the go.</p>
                                    <a href="#" className="d-block mb-2 hover-s"><img src="assets/images/appstore.png" alt="App store" className="img-fluid" /></a>
                                    <a href="#" className="d-block hover-s"><img src="assets/images/googleplay.png" alt="Google play store" className="img-fluid" /></a>
                                </div>
                            </div>{/* end footer-item */}
                        </div>{/* end col-lg-3 */}
                    </div>{/* end row */}
                </div>{/* end container */}
                <div className="section-block" />
                <div className="copyright-content py-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p className="copy-desc">© 2021 Aduca. All Rights Reserved. by <a href="https://techydevs.com/">TechyDevs</a></p>
                            </div>{/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="d-flex flex-wrap align-items-center justify-content-end">
                                    <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14">
                                        <li className="mr-3"><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                                        <li className="mr-3"><a href="privacy-policy.html">Privacy Policy</a></li>
                                    </ul>
                                    <div className="select-container select-container-sm">
                                        <select className="select-container-select">
                                            <option value={1}>English</option>
                                            <option value={2}>Deutsch</option>
                                            <option value={3}>Español</option>
                                            <option value={4}>Français</option>
                                            <option value={5}>Bahasa Indonesia</option>
                                            <option value={6}>Bangla</option>
                                            <option value={7}>日本語</option>
                                            <option value={8}>한국어</option>
                                            <option value={9}>Nederlands</option>
                                            <option value={10}>Polski</option>
                                            <option value={11}>Português</option>
                                            <option value={12}>Română</option>
                                            <option value={13}>Русский</option>
                                            <option value={14}>ภาษาไทย</option>
                                            <option value={15}>Türkçe</option>
                                            <option value={16}>中文(简体)</option>
                                            <option value={17}>中文(繁體)</option>
                                            <option value={17}>Hindi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>{/* end col-lg-6 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end copyright-content */}
            </section>

        </>
    )
}

export default Footer
