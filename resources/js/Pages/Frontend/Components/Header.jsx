import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const Header = () => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [searchBarActive, setSearchBarActive] = useState(false);
    const { auth } = usePage().props;
    const { post } = useForm();
    const handleLogout = (e) => {
        e.preventDefault();
        post(route("user.logout"));
    };
    return (
        <>
            <header className="header-menu-area bg-white">
                <div className="header-top pr-150px pl-150px border-bottom border-bottom-gray py-1">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="header-widget">
                                    <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14">
                                        <li className="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
                                            <i className="la la-phone mr-1" />
                                            <a href="tel:00123456789">
                                                {" "}
                                                (00) 123 456 789
                                            </a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <i className="la la-envelope-o mr-1" />
                                            <a href="mailto:contact@aduca.com">
                                                {" "}
                                                contact@aduca.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* end header-widget */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="header-widget d-flex flex-wrap align-items-center justify-content-end">
                                    {/* <div className="theme-picker d-flex align-items-center">
                                        <button className="theme-picker-btn dark-mode-btn" title="Dark mode">
                                            <svg id="moon" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                            </svg>
                                        </button>
                                        <button className="theme-picker-btn light-mode-btn" title="Light mode">
                                            <svg id="sun" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                                        </button>
                                    </div> */}
                                    <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
                                        {auth.user ? (
                                            <>
                                                <li className="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
                                                    <i className="la la-sign-in mr-1" />
                                                    <Link
                                                        href={route(
                                                            "dashboard"
                                                        )}
                                                    >
                                                        {" "}
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <i className="la la-user mr-1" />
                                                    <Link
                                                        onClick={handleLogout}
                                                    >
                                                        {" "}
                                                        Logout
                                                    </Link>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
                                                    <i className="la la-sign-in mr-1" />
                                                    <Link href="login">
                                                        {" "}
                                                        Login
                                                    </Link>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <i className="la la-user mr-1" />
                                                    <Link href="register">
                                                        {" "}
                                                        Register
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                {/* end header-widget */}
                            </div>
                            {/* end col-lg-6 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container-fluid */}
                </div>
                {/* end header-top */}
                <div className="header-menu-content pr-150px pl-150px bg-white">
                    <div className="container-fluid">
                        <div className="main-menu-content">
                            {/* <a href="#" className="down-button"><i className="la la-angle-down" /></a> */}
                            <div className="row align-items-center">
                                <div className="col-lg-2">
                                    <div className="logo-box">
                                        <a
                                            href={route("index")}
                                            className="logo"
                                        >
                                            <img
                                                src="assets/images/logo.png"
                                                alt="logo"
                                            />
                                        </a>
                                        <div className="user-btn-action flex">
                                            {/* <form method="post">
                                                <div className="search-toggle form-group mb-0">
                                                    <input
                                                        className="form-control form--control pl-3"
                                                        type="text"
                                                        name="search"
                                                        placeholder="Search for anything"
                                                    />
                                                    <span className="la la-search search-icon p-1" />
                                                </div>
                                            </form> */}
                                            <div
                                                onClick={() =>
                                                    setSearchBarActive(true)
                                                }
                                                className="search-menu-toggle icon-element icon-element-sm shadow-sm mr-2"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title=""
                                                data-original-title="Search"
                                            >
                                                <i className="la la-search"></i>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    setSidebarActive(true)
                                                }
                                                className="off-canvas-menu-toggle main-menu-toggle icon-element icon-element-sm shadow-sm"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title=""
                                                data-original-title="Main menu"
                                            >
                                                <i className="la la-bars"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end col-lg-2 */}
                                <div className="col-lg-10">
                                    <div className="menu-wrapper">
                                        <div className="menu-category">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Categories{" "}
                                                        <i className="la la-angle-down fs-12" />
                                                    </a>
                                                    <ul className="cat-dropdown-menu">
                                                        <li>
                                                            <a href="course-grid.html">
                                                                Development{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All
                                                                        Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Web
                                                                        Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Mobile
                                                                        Apps
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Game
                                                                        Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Databases
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Programming
                                                                        Languages
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Software
                                                                        Testing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Software
                                                                        Engineering
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        E-Commerce
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                business{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All
                                                                        Business
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Finance
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Entrepreneurship
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Strategy
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Real
                                                                        Estate
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Home
                                                                        Business
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Communications
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Industry
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Other
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                IT &amp;
                                                                Software{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All IT
                                                                        &amp;
                                                                        Software
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        IT
                                                                        Certification
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Hardware
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Network
                                                                        &amp;
                                                                        Security
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Operating
                                                                        Systems
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Other
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                Finance &amp;
                                                                Accounting{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        {" "}
                                                                        All
                                                                        Finance
                                                                        &amp;
                                                                        Accounting
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Accounting
                                                                        &amp;
                                                                        Bookkeeping
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Cryptocurrency
                                                                        &amp;
                                                                        Blockchain
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Economics
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Investing
                                                                        &amp;
                                                                        Trading
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Other
                                                                        Finance
                                                                        &amp;
                                                                        Economics
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                design{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All
                                                                        Design
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Graphic
                                                                        Design
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Web
                                                                        Design
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Design
                                                                        Tools
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        3D &amp;
                                                                        Animation
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        User
                                                                        Experience
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Other
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                Personal
                                                                Development{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All
                                                                        Personal
                                                                        Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Personal
                                                                        Transformation
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Productivity
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Leadership
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Personal
                                                                        Finance
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Career
                                                                        Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Parenting
                                                                        &amp;
                                                                        Relationships
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Happiness
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                Marketing{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All
                                                                        Marketing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Digital
                                                                        Marketing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Search
                                                                        Engine
                                                                        Optimization
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Social
                                                                        Media
                                                                        Marketing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Branding
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Video
                                                                        &amp;
                                                                        Mobile
                                                                        Marketing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Affiliate
                                                                        Marketing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Growth
                                                                        Hacking
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Other
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                Health &amp;
                                                                Fitness{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All
                                                                        Health
                                                                        &amp;
                                                                        Fitness
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Fitness
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Sports
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Dieting
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Self
                                                                        Defense
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Meditation
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Mental
                                                                        Health
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Yoga
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Dance
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Other
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid.html">
                                                                Photography{" "}
                                                                <i className="la la-angle-right" />
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">
                                                                        All
                                                                        Photography
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Digital
                                                                        Photography
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Photography
                                                                        Fundamentals
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Commercial
                                                                        Photography
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Video
                                                                        Design
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Photography
                                                                        Tools
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Other
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end menu-category */}
                                        <form method="post">
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
                                        <nav className="main-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Home{" "}
                                                        <i className="la la-angle-down fs-12" />
                                                    </a>
                                                    <ul className="dropdown-menu-item">
                                                        <li>
                                                            <a href="index.html">
                                                                Home One
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home-2.html">
                                                                Home Two
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home-3.html">
                                                                Home Three
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="home-4.html">
                                                                Home four
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        courses{" "}
                                                        <i className="la la-angle-down fs-12" />
                                                    </a>
                                                    <ul className="dropdown-menu-item">
                                                        <li>
                                                            <a href="course-grid.html">
                                                                course grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="course-list.html">
                                                                course list
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid-left-sidebar.html">
                                                                grid left
                                                                sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="course-grid-right-sidebar.html">
                                                                grid right
                                                                sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="course-list-left-sidebar.html">
                                                                list left
                                                                sidebar{" "}
                                                                <span className="ribbon ribbon-blue-bg">
                                                                    New
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="course-list-right-sidebar.html">
                                                                list right
                                                                sidebar{" "}
                                                                <span className="ribbon ribbon-blue-bg">
                                                                    New
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="course-details.html">
                                                                course details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="lesson-details.html">
                                                                lesson details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="my-courses.html">
                                                                My courses
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Student{" "}
                                                        <i className="la la-angle-down fs-12" />
                                                    </a>
                                                    <ul className="dropdown-menu-item">
                                                        <li>
                                                            <a href="student-detail.html">
                                                                student detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="student-quiz.html">
                                                                take quiz
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="student-quiz-results.html">
                                                                quiz results
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="student-quiz-result-details.html">
                                                                quiz details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="student-quiz-result-details-2.html">
                                                                quiz details 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="student-path.html">
                                                                path details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="student-path-assessment.html">
                                                                Skill Assessment
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="student-path-assessment-result.html">
                                                                Skill result
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-has">
                                                    <a href="#">
                                                        pages{" "}
                                                        <i className="la la-angle-down fs-12" />
                                                    </a>
                                                    <div className="dropdown-menu-item mega-menu">
                                                        <ul className="row no-gutters">
                                                            <li className="col-lg-3">
                                                                <a href="dashboard.html">
                                                                    dashboard{" "}
                                                                    <span className="ribbon">
                                                                        Hot
                                                                    </span>
                                                                </a>
                                                                <a href="about.html">
                                                                    about
                                                                </a>
                                                                <a href="teachers.html">
                                                                    Teachers
                                                                </a>
                                                                <a href="teacher-detail.html">
                                                                    Teacher
                                                                    detail
                                                                </a>
                                                                <a href="categories.html">
                                                                    categories
                                                                </a>
                                                                <a href="terms-and-conditions.html">
                                                                    Terms &amp;
                                                                    conditions
                                                                </a>
                                                                <a href="privacy-policy.html">
                                                                    privacy
                                                                    policy
                                                                </a>
                                                                <a href="invite.html">
                                                                    invite
                                                                    friend
                                                                </a>
                                                            </li>
                                                            <li className="col-lg-3">
                                                                <a href="careers.html">
                                                                    careers
                                                                </a>
                                                                <a href="career-details.html">
                                                                    career
                                                                    details
                                                                </a>
                                                                <a href="become-a-teacher.html">
                                                                    become an
                                                                    instructor
                                                                </a>
                                                                <a href="faq.html">
                                                                    FAQs
                                                                </a>
                                                                <a href="admission.html">
                                                                    admission
                                                                </a>
                                                                <a href="gallery.html">
                                                                    gallery
                                                                </a>
                                                                <a href="pricing-table.html">
                                                                    pricing
                                                                    tables
                                                                </a>
                                                                <a href="contact.html">
                                                                    contact
                                                                </a>
                                                            </li>
                                                            <li className="col-lg-3">
                                                                <a href="for-business.html">
                                                                    for business
                                                                </a>
                                                                <a href="sign-up.html">
                                                                    sign-up
                                                                </a>
                                                                <a href="login.html">
                                                                    login
                                                                </a>
                                                                <a href="recover.html">
                                                                    recover
                                                                </a>
                                                                <a href="shopping-cart.html">
                                                                    cart
                                                                </a>
                                                                <a href="checkout.html">
                                                                    checkout
                                                                </a>
                                                                <a href="error.html">
                                                                    page 404
                                                                </a>
                                                            </li>
                                                            <li className="col-lg-3">
                                                                <div className="menu-banner position-relative h-100">
                                                                    <div className="overlay rounded-rounded opacity-4" />
                                                                    <div className="menu-banner-content p-4 position-absolute bottom-0 left-0">
                                                                        <h4 className="fs-20 font-weight-bold pb-3 text-white">
                                                                            30
                                                                            days
                                                                            free
                                                                            trail
                                                                            for
                                                                            new
                                                                            users
                                                                        </h4>
                                                                        <a
                                                                            href="sign-up.html"
                                                                            className="btn theme-btn theme-btn-sm theme-btn-white"
                                                                        >
                                                                            Start
                                                                            Learning{" "}
                                                                            <i className="la la-arrow-right icon ml-1" />
                                                                        </a>
                                                                    </div>
                                                                    <img
                                                                        src="assets/images/menu-banner-img.jpg"
                                                                        alt="menu banner image"
                                                                        className="w-100 h-100 rounded-rounded"
                                                                    />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        blog{" "}
                                                        <i className="la la-angle-down fs-12" />
                                                    </a>
                                                    <ul className="dropdown-menu-item">
                                                        <li>
                                                            <a href="blog-full-width.html">
                                                                blog full width{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-no-sidebar.html">
                                                                blog no sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-left-sidebar.html">
                                                                blog left
                                                                sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-right-sidebar.html">
                                                                blog right
                                                                sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single.html">
                                                                blog detail
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/* end ul */}
                                        </nav>
                                        {/* end main-menu */}
                                        <div className="shop-cart mr-4">
                                            <ul>
                                                <li>
                                                    <p className="shop-cart-btn d-flex align-items-center">
                                                        <i className="la la-shopping-cart" />
                                                        <span className="product-count">
                                                            2
                                                        </span>
                                                    </p>
                                                    <ul className="cart-dropdown-menu">
                                                        <li className="media media-card">
                                                            <a
                                                                href="shopping-cart.html"
                                                                className="media-img"
                                                            >
                                                                <img
                                                                    src="assets/images/small-img.jpg"
                                                                    alt="Cart image"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <h5>
                                                                    <a href="course-details.html">
                                                                        The
                                                                        Complete
                                                                        JavaScript
                                                                        Course
                                                                        2021:
                                                                        From
                                                                        Zero to
                                                                        Expert!
                                                                    </a>
                                                                </h5>
                                                                <span className="d-block lh-18 py-1">
                                                                    Kamran Ahmed
                                                                </span>
                                                                <p className="text-black font-weight-semi-bold lh-18">
                                                                    $12.99{" "}
                                                                    <span className="before-price fs-14">
                                                                        $129.99
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="media media-card">
                                                            <a
                                                                href="shopping-cart.html"
                                                                className="media-img"
                                                            >
                                                                <img
                                                                    src="assets/images/small-img.jpg"
                                                                    alt="Cart image"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <h5>
                                                                    <a href="course-details.html">
                                                                        The
                                                                        Complete
                                                                        JavaScript
                                                                        Course
                                                                        2021:
                                                                        From
                                                                        Zero to
                                                                        Expert!
                                                                    </a>
                                                                </h5>
                                                                <span className="d-block lh-18 py-1">
                                                                    Kamran Ahmed
                                                                </span>
                                                                <p className="text-black font-weight-semi-bold lh-18">
                                                                    $12.99{" "}
                                                                    <span className="before-price fs-14">
                                                                        $129.99
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="media media-card">
                                                            <div className="media-body fs-16">
                                                                <p className="text-black font-weight-semi-bold lh-18">
                                                                    Total:{" "}
                                                                    <span className="cart-total">
                                                                        $12.99
                                                                    </span>{" "}
                                                                    <span className="before-price fs-14">
                                                                        $129.99
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="shopping-cart.html"
                                                                className="btn theme-btn w-100"
                                                            >
                                                                Got to cart{" "}
                                                                <i className="la la-arrow-right icon ml-1" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end shop-cart */}
                                        <div className="nav-right-button">
                                            <a
                                                href="admission.html"
                                                className="btn theme-btn d-none d-lg-inline-block"
                                            >
                                                <i className="la la-user-plus mr-1" />{" "}
                                                Admission
                                            </a>
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
                <div
                    className={`off-canvas-menu custom-scrollbar-styled main-off-canvas-menu ${
                        sidebarActive ? "active" : ""
                    }`}
                >
                    <div
                        onClick={() => setSidebarActive(false)}
                        className="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Close menu"
                    >
                        <i className="la la-times" />
                    </div>
                    {/* end off-canvas-menu-close */}
                    <ul className="generic-list-item off-canvas-menu-list pt-90px">
                        <li>
                            <a href="#">Home</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="index.html">Home One</a>
                                </li>
                                <li>
                                    <a href="home-2.html">Home Two</a>
                                </li>
                                <li>
                                    <a href="home-3.html">Home Three</a>
                                </li>
                                <li>
                                    <a href="home-4.html">Home four</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">courses</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="course-grid.html">course grid</a>
                                </li>
                                <li>
                                    <a href="course-list.html">course list</a>
                                </li>
                                <li>
                                    <a href="course-grid-left-sidebar.html">
                                        grid left sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="course-grid-right-sidebar.html">
                                        grid right sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="course-list-left-sidebar.html">
                                        list left sidebar{" "}
                                        <span className="ribbon ribbon-blue-bg">
                                            New
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="course-list-right-sidebar.html">
                                        list right sidebar{" "}
                                        <span className="ribbon ribbon-blue-bg">
                                            New
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="course-details.html">
                                        course details
                                    </a>
                                </li>
                                <li>
                                    <a href="lesson-details.html">
                                        lesson details
                                    </a>
                                </li>
                                <li>
                                    <a href="my-courses.html">My courses</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Student</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="student-detail.html">
                                        student detail
                                    </a>
                                </li>
                                <li>
                                    <a href="student-quiz.html">take quiz</a>
                                </li>
                                <li>
                                    <a href="student-quiz-results.html">
                                        quiz results
                                    </a>
                                </li>
                                <li>
                                    <a href="student-quiz-result-details.html">
                                        quiz details
                                    </a>
                                </li>
                                <li>
                                    <a href="student-quiz-result-details-2.html">
                                        quiz details 2
                                    </a>
                                </li>
                                <li>
                                    <a href="student-path.html">path details</a>
                                </li>
                                <li>
                                    <a href="student-path-assessment.html">
                                        Skill Assessment
                                    </a>
                                </li>
                                <li>
                                    <a href="student-path-assessment-result.html">
                                        Skill result
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">pages</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="dashboard.html">
                                        dashboard{" "}
                                        <span className="ribbon">Hot</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html">about</a>
                                </li>
                                <li>
                                    <a href="teachers.html">Teachers</a>
                                </li>
                                <li>
                                    <a href="teacher-detail.html">
                                        Teacher detail
                                    </a>
                                </li>
                                <li>
                                    <a href="careers.html">careers</a>
                                </li>
                                <li>
                                    <a href="career-details.html">
                                        career details
                                    </a>
                                </li>
                                <li>
                                    <a href="categories.html">categories</a>
                                </li>
                                <li>
                                    <a href="terms-and-conditions.html">
                                        Terms &amp; conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">
                                        privacy policy
                                    </a>
                                </li>
                                <li>
                                    <a href="for-business.html">for business</a>
                                </li>
                                <li>
                                    <a href="become-a-teacher.html">
                                        become an instructor
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQs</a>
                                </li>
                                <li>
                                    <a href="admission.html">admission</a>
                                </li>
                                <li>
                                    <a href="gallery.html">gallery</a>
                                </li>
                                <li>
                                    <a href="pricing-table.html">
                                        pricing tables
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html">contact</a>
                                </li>
                                <li>
                                    <a href="sign-up.html">sign-up</a>
                                </li>
                                <li>
                                    <a href="login.html">login</a>
                                </li>
                                <li>
                                    <a href="recover.html">recover</a>
                                </li>
                                <li>
                                    <a href="shopping-cart.html">cart</a>
                                </li>
                                <li>
                                    <a href="checkout.html">checkout</a>
                                </li>
                                <li>
                                    <a href="error.html">page 404</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">blog</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="blog-full-width.html">
                                        blog full width{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-no-sidebar.html">
                                        blog no sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-left-sidebar.html">
                                        blog left sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-right-sidebar.html">
                                        blog right sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-single.html">blog detail</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
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
                    <ul className="generic-list-item off-canvas-menu-list pt-90px">
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
                            <a href="course-grid.html">
                                Finance &amp; Accounting
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#">
                                        {" "}
                                        All Finance &amp; Accounting
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Accounting &amp; Bookkeeping</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Cryptocurrency &amp; Blockchain
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Economics</a>
                                </li>
                                <li>
                                    <a href="#">Investing &amp; Trading</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Other Finance &amp; Economics
                                    </a>
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
                                    <a href="#">
                                        Parenting &amp; Relationships
                                    </a>
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
                <div
                    className={`mobile-search-form ${
                        searchBarActive ? "active" : ""
                    }`}
                >
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
                        <div
                            onClick={() => setSearchBarActive(false)}
                            className="search-bar-close icon-element icon-element-sm shadow-sm"
                        >
                            <i className="la la-times" />
                        </div>
                        {/* end off-canvas-menu-close */}
                    </div>
                </div>
                {/* end mobile-search-form */}
                <div
                    className={`body-overlay
                        ${sidebarActive ? "active" : ""}
                        ${searchBarActive ? "active" : ""}`}
                    onClick={() => {
                        setSidebarActive(false);
                        setSearchBarActive(false);
                    }}
                />
            </header>
        </>
    );
};

export default Header;
