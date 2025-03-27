import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';
import { CFormCheck } from '@coreui/react';

const ViewCourse = ({ course, lectures, sections }) => {
  const [loading, setLoading] = useState(true);
  const { flash } = usePage().props;
  const [openSections, setOpenSections] = useState(sections.map(() => false));
  const [showFull, setShowFull] = useState(false);
  const shortDescription = course.description.slice(0, 600);

  const [activeTab, setActiveTab] = useState('overview');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const { data, setData } = useForm({
    video: course.video,
    lectureContent: '',
    lectureVideo: '',
  });

  const [videoSrc, setVideoSrc] = useState(
    `/upload/course/video/${data.video}`
  );

  const [content, setContent] = useState(data.lectureContent);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  // Toaster messages for flash alerts
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (flash?.message) {
      const type = flash.alertType || 'success';
      toast[type](flash.message);
    }
  }, [flash]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Meta Tags */}
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="TechyDevs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        {/* Title */}
        <title>LMS</title>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" sizes="16x16" href="/assets/images/favicon.png" />

        {/* CSS Files */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/line-awesome.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/css/fancybox.css" />
        <link rel="stylesheet" href="/assets/css/tooltipster.bundle.css" />
        <link rel="stylesheet" href="/assets/css/leaflet.css" />
        <link rel="stylesheet" href="/assets/css/plyr.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Helmet>

      {/* Preloader */}
      {loading && (
        <div className="preloader">
          <div className="loader">
            <svg className="spinner" viewBox="0 0 50 50">
              <circle
                className="path"
                cx={25}
                cy={25}
                r={20}
                fill="none"
                strokeWidth={5}
              />
            </svg>
          </div>
        </div>
      )}

      {/* Page Content */}
      {!loading && (
        <>
          <Toaster position="top-right" reverseOrder={false} />
          <div>
            <section className="header-menu-area">
              <div className="header-menu-content bg-dark fixed top-0 w-full z-50">
                <div className="container-fluid">
                  <div className="main-menu-content d-flex align-items-center">
                    <div className="logo-box logo--box"></div>
                    {/* end logo-box */}
                    <div className="course-dashboard-header-title pl-4">
                      <a
                        href="course-details.html"
                        className="text-white fs-15"
                      >
                        {course.course_name}
                      </a>
                    </div>
                    {/* end course-dashboard-header-title */}
                    <div className="menu-wrapper ml-auto">
                      <div className="nav-right-button d-flex align-items-center">
                        <a
                          href="#"
                          className="btn theme-btn theme-btn-sm theme-btn-transparent lh-26 text-white mr-2"
                          data-toggle="modal"
                          data-target="#ratingModal"
                        >
                          <i className="la la-star mr-1" /> leave a rating
                        </a>
                        <Link
                          href={route('index')}
                          className="btn theme-btn theme-btn-sm theme-btn-transparent lh-26 text-white mr-2"
                        >
                          <i className="la la-home mr-1" /> Home
                        </Link>
                      </div>
                      {/* end nav-right-button */}
                    </div>
                    {/* end menu-wrapper */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container-fluid */}
              </div>
              {/* end header-menu-content */}
            </section>
            <section className="course-dashboard mt-20">
              <div className="course-dashboard-wrap">
                <div className="course-dashboard-container d-flex">
                  <div className="course-dashboard-column">
                    <div className="flex justify-center items-center w-full">
                      <div className="lecture-video-item w-full max-w-6xl">
                        {content ? (
                          <div className="px-52 py-20 text-black text-lg">
                            {content}
                          </div>
                        ) : (
                          ''
                        )}
                        {data.video ? (
                          <video
                            key={videoSrc} // React will re-render the video when src changes
                            controls
                            crossOrigin
                            playsInline
                            className="w-full shadow-lg"
                          >
                            <source src={videoSrc} type="video/mp4" />
                          </video>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>

                    {/* end lecture-viewer-container */}
                    <div className="lecture-video-detail">
                      <div className="lecture-tab-body bg-gray p-4">
                        <ul
                          className="nav nav-tabs generic-tab"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item mobile-menu-nav-item">
                            <a
                              className="nav-link"
                              id="course-content-tab"
                              data-toggle="tab"
                              href="#course-content"
                              role="tab"
                              aria-controls="course-content"
                              aria-selected="false"
                            >
                              Course Content
                            </a>
                          </li>
                          <li className="nav-item">
                            <button
                              className={`nav-link ${
                                activeTab === 'overview' ? 'active' : ''
                              }`}
                              onClick={() => handleTabChange('overview')}
                            >
                              Overview
                            </button>
                          </li>
                          <li className="nav-item">
                            <button
                              className={`nav-link ${
                                activeTab === 'questions' ? 'active' : ''
                              }`}
                              onClick={() => handleTabChange('questions')}
                            >
                              Questions & Ans
                            </button>{' '}
                          </li>
                          <li className="nav-item">
                            <button
                              className={`nav-link ${
                                activeTab === 'announcements' ? 'active' : ''
                              }`}
                              onClick={() => handleTabChange('announcements')}
                            >
                              Announcements
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="lecture-video-detail-body">
                        <div className="tab-content" id="myTabContent">
                          {activeTab === 'overview' && (
                            <div
                              className="tab-pane fade show active"
                              id="overview"
                              role="tabpanel"
                              aria-labelledby="overview-tab"
                            >
                              <div className="lecture-overview-wrap">
                                <div className="lecture-overview-item">
                                  <h3 className="fs-24 font-weight-semi-bold pb-2">
                                    About this course
                                  </h3>
                                  <p>{course.course_title}</p>
                                </div>
                                {/* end lecture-overview-item */}
                                <div className="section-block" />
                                <div className="lecture-overview-item">
                                  <div className="lecture-overview-stats-wrap d-flex">
                                    <div className="lecture-overview-stats-item">
                                      <h3 className="fs-16 font-weight-semi-bold pb-2">
                                        By the numbers
                                      </h3>
                                    </div>
                                    {/* end lecture-overview-stats-item */}
                                    <div className="lecture-overview-stats-item">
                                      <ul className="generic-list-item">
                                        <li>
                                          <li>
                                            <span>Lectures:</span>{' '}
                                            {lectures.length} lectures
                                          </li>
                                          <li>
                                            <span>Total hours:</span>
                                            {course.duration}
                                          </li>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* end lecture-overview-stats-item */}
                                    <div className="lecture-overview-stats-item">
                                      <ul className="generic-list-item">
                                        <li>
                                          <span>Certificate:</span>
                                          {course.certificate}
                                        </li>
                                        <li>
                                          <span>Skill level:</span>
                                          {course.label}
                                        </li>
                                      </ul>
                                    </div>
                                    {/* end lecture-overview-stats-item */}
                                  </div>
                                  {/* end lecture-overview-stats-wrap */}
                                </div>
                                {/* end lecture-overview-item */}
                                <div className="section-block" />

                                <div className="section-block" />
                                <div className="lecture-overview-item">
                                  <div className="lecture-overview-stats-wrap d-flex">
                                    <div className="lecture-overview-stats-item">
                                      <h3 className="fs-16 font-weight-semi-bold pb-2">
                                        Description
                                      </h3>
                                    </div>
                                    {/* end lecture-overview-stats-item */}
                                    <div className="lecture-overview-stats-item lecture-overview-stats-wide-item lecture-description">
                                      <h3 class="fs-16 font-weight-semi-bold pb-2">
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
                                            onClick={() =>
                                              setShowFull(!showFull)
                                            }
                                          >
                                            {showFull
                                              ? 'Show Less'
                                              : 'Show More'}
                                          </button>
                                        )}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                {/* end lecture-overview-item */}
                                <div className="section-block" />
                                <div className="lecture-overview-item">
                                  <div className="lecture-overview-stats-wrap d-flex ">
                                    <div className="lecture-overview-stats-item">
                                      <h3 className="fs-16 font-weight-semi-bold pb-2">
                                        Instructor
                                      </h3>
                                    </div>
                                    {/* end lecture-overview-stats-item */}
                                    <div className="lecture-overview-stats-item lecture-overview-stats-wide-item">
                                      <div className="media media-card align-items-center">
                                        <a
                                          href="teacher-detail.html"
                                          className="media-img d-block rounded-full avatar-md"
                                        >
                                          <img
                                            src={
                                              course.instructor.photo
                                                ? `/upload/instructor_images/${course.instructor.photo}`
                                                : '/images/user_placeholder.png'
                                            }
                                            alt="Instructor avatar"
                                            className="rounded-full"
                                          />
                                        </a>
                                        <div className="media-body">
                                          <h5>
                                            <a href="teacher-detail.html">
                                              {course.instructor.name}{' '}
                                            </a>
                                          </h5>
                                          <span className="d-block lh-18  mt-2">
                                            {course.instructor.email}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {activeTab === 'questions' && (
                            <div className="tab-pane fade show active">
                              <div className="lecture-overview-wrap lecture-quest-wrap">
                                {/* end new-question-wrap */}
                                <div className="replay-question-wrap">
                                  <button className="btn theme-btn theme-btn-transparent back-to-question-btn">
                                    <i className="la la-reply mr-1" />
                                    Back to all questions
                                  </button>
                                  <div className="replay-question-body pt-30px">
                                    <div className="question-list-item">
                                      <div className="media media-card border-bottom border-bottom-gray py-4">
                                        <div className="media-img rounded-full flex-shrink-0 avatar-sm">
                                          <img
                                            className="rounded-full"
                                            src="images/small-avatar-1.jpg"
                                            alt="User image"
                                          />
                                        </div>
                                        <div className="media-body">
                                          <div className="d-flex justify-content-between">
                                            <div className="question-meta-content">
                                              <h5 className="fs-16 pb-1">
                                                I still did't get H264 after
                                                installing Quicktime. Please
                                                what do I do
                                              </h5>
                                              <p className="meta-tags fs-13">
                                                <a href="#">Alex Smith</a>
                                                <a href="#">Lecture 20</a>
                                                <span>3 hours ago</span>
                                              </p>
                                              <p className="fs-15 text-gray">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation.
                                              </p>
                                            </div>
                                            {/* end question-meta-content */}
                                            <div className="question-upvote-action">
                                              <div className="number-upvotes pb-2 d-flex align-items-center generic-action-wrap">
                                                <span>1</span>
                                                <button type="button">
                                                  <i className="la la-arrow-up" />
                                                </button>
                                                <div className="dropdown">
                                                  <button
                                                    className="ml-0"
                                                    type="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                  >
                                                    <i className="la la-ellipsis-v" />
                                                  </button>
                                                  <div className="dropdown-menu dropdown-menu-right">
                                                    <a
                                                      className="dropdown-item"
                                                      href="#"
                                                      data-toggle="modal"
                                                      data-target="#reportModal"
                                                    >
                                                      <i className="la la-flag mr-1" />{' '}
                                                      Report abuse
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            {/* end question-upvote-action */}
                                          </div>
                                        </div>
                                        {/* end media-body */}
                                      </div>
                                      {/* end media */}
                                      <div className="question-replay-separator-wrap d-flex align-items-center justify-content-between py-3">
                                        <h4 className="fs-16 font-weight-semi-bold">
                                          1 Replay
                                        </h4>
                                        <button
                                          className="btn swapping-btn text-gray font-weight-medium"
                                          data-text-swap="Following replies"
                                          data-text-original="Follow replies"
                                        >
                                          Follow replies
                                        </button>
                                      </div>
                                      {/* end question-replay-separator-wrap */}
                                      <div className="section-block" />
                                      <div className="question-answer-wrap">
                                        <div className="media media-card mb-3 border-bottom border-bottom-gray py-4">
                                          <div className="media-img rounded-full avatar-sm flex-shrink-0">
                                            <img
                                              src="images/small-avatar-2.jpg"
                                              alt="Instructor avatar"
                                              className="rounded-full"
                                            />
                                          </div>
                                          {/* end media-img */}
                                          <div className="media-body">
                                            <h5 className="fs-16">
                                              <a href="#">David Luise</a>
                                            </h5>
                                            <span className="fs-14">
                                              3 years ago
                                            </span>
                                            <p className="pt-1 fs-15">
                                              Occaecati cupiditate non
                                              provident, similique sunt in culpa
                                              fuga.
                                            </p>
                                          </div>
                                          {/* end media-body */}
                                        </div>
                                        {/* end media */}
                                        <div className="question-replay-input-wrap pt-20px">
                                          <div className="question-replay-body">
                                            <h3 className="fs-16 font-weight-semi-bold">
                                              Add Replay
                                            </h3>
                                            <form
                                              method="post"
                                              className="pt-4"
                                            >
                                              <div className="replay-action-bar">
                                                <div className="btn-group">
                                                  <button
                                                    className="btn"
                                                    type="button"
                                                    data-toggle="modal"
                                                    data-target="#insertLinkModal"
                                                    title="Insert link"
                                                  >
                                                    <i className="la la-link" />
                                                  </button>
                                                  <button
                                                    className="btn"
                                                    type="button"
                                                    data-toggle="modal"
                                                    data-target="#uploadPhotoModal"
                                                    title="Upload an image"
                                                  >
                                                    <i className="la la-photo" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="form-group">
                                                <textarea
                                                  className="form-control form--control pl-3"
                                                  name="message"
                                                  rows={4}
                                                  placeholder="Write your response..."
                                                  defaultValue={''}
                                                />
                                              </div>
                                              <div className="btn-box">
                                                <button
                                                  className="btn theme-btn"
                                                  type="submit"
                                                >
                                                  Add an answer{' '}
                                                  <i className="la la-arrow-right icon ml-1" />
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        {/* end question-replay-input-wrap */}
                                      </div>
                                      {/* end question-answer-wrap */}
                                    </div>
                                    {/* end question-list-item */}
                                  </div>
                                  {/* end replay-question-body */}
                                </div>
                                {/* end replay-question-wrap */}
                                <div className="question-overview-result-wrap">
                                  <div className="lecture-overview-item">
                                    <div className="question-overview-result-header d-flex align-items-center justify-content-between">
                                      <h3 className="fs-17 font-weight-semi-bold">
                                        30 questions in this course
                                      </h3>
                                      <button
                                        onClick={() =>
                                          handleTabChange('askQuestion')
                                        }
                                        className="btn theme-btn theme-btn-sm theme-btn-transparent ask-new-question-btn"
                                      >
                                        Ask a new question
                                      </button>
                                    </div>
                                  </div>
                                  {/* end lecture-overview-item */}
                                  <div className="section-block" />
                                  <div className="lecture-overview-item mt-0">
                                    <div className="question-list-item">
                                      <div className="media media-card border-bottom border-bottom-gray py-4 px-3">
                                        <div className="media-img rounded-full flex-shrink-0 avatar-sm">
                                          <img
                                            className="rounded-full"
                                            src="images/small-avatar-1.jpg"
                                            alt="User image"
                                          />
                                        </div>
                                        <div className="media-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="question-meta-content">
                                              <a
                                                href="javascript:void(0)"
                                                className="d-block"
                                              >
                                                <h5 className="fs-16 pb-1">
                                                  I still did't get H264 after
                                                  installing Quicktime. Please
                                                  what do I do
                                                </h5>
                                                <p className="text-truncate fs-15 text-gray">
                                                  Lorem ipsum dolor sit amet,
                                                  consectetur adipisicing elit,
                                                  sed do eiusmod tempor
                                                  incididunt ut labore et dolore
                                                  magna aliqua. Ut enim ad minim
                                                  veniam, quis nostrud
                                                  exercitation.
                                                </p>
                                              </a>
                                            </div>
                                            {/* end question-meta-content */}
                                            <div className="question-upvote-action">
                                              <div className="number-upvotes pb-2 d-flex align-items-center">
                                                <span>1</span>
                                                <button type="button">
                                                  <i className="la la-arrow-up" />
                                                </button>
                                              </div>
                                              <div className="number-upvotes question-response d-flex align-items-center">
                                                <span>1</span>
                                                <button
                                                  type="button"
                                                  className="question-replay-btn"
                                                >
                                                  <i className="la la-comments" />
                                                </button>
                                              </div>
                                            </div>
                                            {/* end question-upvote-action */}
                                          </div>
                                          <p className="meta-tags pt-1 fs-13">
                                            <a href="#">Alex Smith</a>
                                            <a href="#">Lecture 20</a>
                                            <span>3 hours ago</span>
                                          </p>
                                        </div>
                                        {/* end media-body */}
                                      </div>
                                    </div>
                                    <div className="question-btn-box pt-35px text-center">
                                      <button
                                        className="btn theme-btn theme-btn-transparent w-100"
                                        type="button"
                                      >
                                        See More
                                      </button>
                                    </div>
                                  </div>
                                  {/* end lecture-overview-item */}
                                </div>
                              </div>
                            </div>
                          )}
                          {activeTab === 'askQuestion' && (
                            <div className="new-question-wrap active">
                              <button
                                onClick={() => handleTabChange('questions')}
                                className="btn theme-btn theme-btn-transparent back-to-question-btn"
                              >
                                <i className="la la-reply mr-1" />
                                Back to all questions
                              </button>
                              <div className="new-question-body pt-40px">
                                <h3 className="fs-20 font-weight-semi-bold">
                                  My question relates to
                                </h3>
                                <form action="#" className="pt-4">
                                  <div className="custom-control-wrap">
                                    <div className="custom-control custom-radio mb-3 pl-0">
                                      <input
                                        type="radio"
                                        className="custom-control-input"
                                        id="courseContentRadio"
                                        name="radio-stacked"
                                        required
                                      />
                                      <label
                                        className="custom-control-label custom--control-label custom--control-label-boxed"
                                        htmlFor="courseContentRadio"
                                      >
                                        <span className="font-weight-semi-bold text-black d-block">
                                          Course content
                                        </span>
                                        <span className="d-block fs-14 lh-20">
                                          This might include comments,
                                          questions, tips, or projects to share
                                        </span>
                                      </label>
                                    </div>
                                    <div className="custom-control custom-radio mb-3 pl-0">
                                      <input
                                        type="radio"
                                        className="custom-control-input"
                                        id="somethingElseRadio"
                                        name="radio-stacked"
                                        required
                                      />
                                      <label
                                        className="custom-control-label custom--control-label custom--control-label-boxed"
                                        htmlFor="somethingElseRadio"
                                      >
                                        <span className="font-weight-semi-bold text-black d-block">
                                          Something else
                                        </span>
                                        <span className="d-block fs-14 lh-20">
                                          This might include questions about
                                          certificates, audio and video
                                          troubleshooting, or download issues
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="btn-box text-center">
                                    <button className="btn theme-btn w-100">
                                      Continue{' '}
                                      <i className="la la-arrow-right icon ml-1" />
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          )}
                          {activeTab === 'announcements' && (
                            <div
                              className="tab-pane fade show active"
                              id="announcements"
                              role="tabpanel"
                              aria-labelledby="announcements-tab"
                            >
                              <div className="lecture-overview-wrap lecture-announcement-wrap">
                                <div className="lecture-overview-item">
                                  <div className="media media-card align-items-center">
                                    <a
                                      href="teacher-detail.html"
                                      className="media-img d-block rounded-full avatar-md"
                                    >
                                      <img
                                        src="images/small-avatar-1.jpg"
                                        alt="Instructor avatar"
                                        className="rounded-full"
                                      />
                                    </a>
                                    <div className="media-body">
                                      <h5 className="pb-1">
                                        <a href="teacher-detail.html">
                                          Alex Smith
                                        </a>
                                      </h5>
                                      <div className="announcement-meta fs-15">
                                        <span>Posted an announcement</span>
                                        <span> · 3 years ago ·</span>
                                        <a
                                          href="#"
                                          className="btn-text"
                                          data-toggle="modal"
                                          data-target="#reportModal"
                                          title="Report abuse"
                                        >
                                          <i className="la la-flag" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="lecture-owner-decription pt-4">
                                    <h3 className="fs-19 font-weight-semi-bold pb-3">
                                      Important Q&amp;A support
                                    </h3>
                                    <p>
                                      Happy 2019 to everyone, thank you for
                                      being a student and all of your support.
                                    </p>
                                    <p>
                                      <strong>
                                        Great job on enrolling and your current
                                        course progress. I encourage you keep in
                                        pursuit of your dreams :)
                                      </strong>
                                    </p>
                                    <p>
                                      The whole lot. In my course After Effects
                                      Complete Course packed with all Techniques
                                      and Methods (No Tricks and gimmicks).
                                    </p>
                                    <p className="font-italic">
                                      <strong>
                                        Unfortunately this will result in
                                        delayed responses by me in the Q&amp;A
                                        section and to direct messages. This is
                                        only for the next week and once back I
                                        will be back to 100% .
                                      </strong>
                                    </p>
                                    <p>
                                      I will continue to do my best to respond
                                      to as many questions as possible but only
                                      one person, regularly I spend 4-5 hours
                                      daily on this and with over 440000
                                      students as you can image that its a lot
                                      of work.
                                    </p>
                                    <p className="font-italic">
                                      Thank you once again for your
                                      understanding and for all of the wonderful
                                      students who I have had an opportunity to
                                      communicate with regularly and all of your
                                      encouragement.
                                    </p>
                                    <p>Have an awesome day</p>
                                    <p>Alex</p>
                                  </div>
                                  <div className="lecture-announcement-comment-wrap pt-4">
                                    <div className="media media-card align-items-center">
                                      <div className="media-img rounded-full avatar-sm flex-shrink-0">
                                        <img
                                          src="images/small-avatar-1.jpg"
                                          alt="Instructor avatar"
                                          className="rounded-full"
                                        />
                                      </div>
                                      {/* end media-img */}
                                      <div className="media-body">
                                        <form action="#">
                                          <div className="input-group">
                                            <input
                                              className="form-control form--control form--control-gray pl-3"
                                              type="text"
                                              name="search"
                                              placeholder="Enter your comment"
                                            />
                                            <div className="input-group-append">
                                              <button
                                                className="btn theme-btn"
                                                type="button"
                                              >
                                                <i className="la la-arrow-right" />
                                              </button>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                      {/* end media-body */}
                                    </div>
                                    {/* end media */}
                                    <div className="comments pt-40px">
                                      <div className="media media-card mb-3 border-bottom border-bottom-gray pb-3">
                                        <div className="media-img rounded-full avatar-sm flex-shrink-0">
                                          <img
                                            src="images/small-avatar-2.jpg"
                                            alt="Instructor avatar"
                                            className="rounded-full"
                                          />
                                        </div>
                                        {/* end media-img */}
                                        <div className="media-body">
                                          <div className="announcement-meta fs-15 lh-20">
                                            <a href="#" className="text-color">
                                              Tony Olsson
                                            </a>
                                            <span> · 3 years ago ·</span>
                                            <a
                                              href="#"
                                              className="btn-text"
                                              data-toggle="modal"
                                              data-target="#reportModal"
                                              title="Report abuse"
                                            >
                                              <i className="la la-flag" />
                                            </a>
                                          </div>
                                          <p className="pt-1">
                                            Occaecati cupiditate non provident,
                                            similique sunt in culpa fuga.
                                          </p>
                                        </div>
                                        {/* end media-body */}
                                      </div>
                                      {/* end media */}
                                      <div className="media media-card mb-3 border-bottom border-bottom-gray pb-3">
                                        <div className="media-img rounded-full avatar-sm flex-shrink-0">
                                          <img
                                            src="images/small-avatar-3.jpg"
                                            alt="Instructor avatar"
                                            className="rounded-full"
                                          />
                                        </div>
                                        {/* end media-img */}
                                        <div className="media-body">
                                          <div className="announcement-meta fs-15 lh-20">
                                            <a href="#" className="text-color">
                                              Eduard-Dan
                                            </a>
                                            <span> · 2 years ago ·</span>
                                            <a
                                              href="#"
                                              className="btn-text"
                                              data-toggle="modal"
                                              data-target="#reportModal"
                                              title="Report abuse"
                                            >
                                              <i className="la la-flag" />
                                            </a>
                                          </div>
                                          <p className="pt-1">
                                            Occaecati cupiditate non provident,
                                            similique sunt in culpa fuga.
                                          </p>
                                        </div>
                                        {/* end media-body */}
                                      </div>
                                      {/* end media */}
                                    </div>
                                    {/* end comments */}
                                  </div>
                                  {/* end lecture-announcement-comment-wrap */}
                                </div>
                                {/* end lecture-overview-item */}
                              </div>
                            </div>
                          )}
                          {/* end tab-pane */}
                        </div>
                        {/* end tab-content */}
                      </div>
                      {/* end lecture-video-detail-body */}
                    </div>
                    {/* end lecture-video-detail */}

                    <Footer />
                  </div>
                  {/* end course-dashboard-column */}
                  <div className="course-dashboard-sidebar-column">
                    <button className="sidebar-open" type="button">
                      <i className="la la-angle-left" /> Course content
                    </button>
                    <div className="course-dashboard-sidebar-wrap custom-scrollbar-styled">
                      <div className="course-dashboard-side-heading d-flex align-items-center justify-content-between">
                        <h3 className="fs-18 font-weight-semi-bold">
                          Course content
                        </h3>
                        <button className="sidebar-close" type="button">
                          <i className="la la-times" />
                        </button>
                      </div>
                      {/* end course-dashboard-side-heading */}
                      <div className="curriculum-content">
                        <div id="accordion" className="generic-accordion">
                          {sections.map((section, index) => {
                            const collapseId = `collapse-${index}`;
                            const headingId = `heading-${index}`;
                            const isOpen = openSections[index];

                            return (
                              <div key={index} className="card mb-0">
                                <div className="card-header" id={headingId}>
                                  <button
                                    className="w-100 p-3 bg-[#f6f7f9]  text-left border-b border-gray-300"
                                    onClick={() => toggleSection(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={collapseId}
                                  >
                                    <div className="flex-column flex-grow-1">
                                      <span className="fs-15 font-bold text-dark flex justify-between">
                                        Section {index + 1}:{' '}
                                        {section.section_title}
                                        <i
                                          className={`la ${
                                            isOpen
                                              ? 'la-angle-up'
                                              : 'la-angle-down'
                                          } mr-3 mt-1`}
                                        />
                                      </span>

                                      <span className="fs-15 text-gray font-weight-medium">
                                        {section.lectures.length === 1
                                          ? '1 lecture'
                                          : `${section.lectures.length} lectures`}
                                      </span>
                                    </div>
                                  </button>
                                </div>

                                {/* end card-header */}
                                {isOpen && (
                                  <div id={collapseId} className="my-3">
                                    <ul className="generic-list-item">
                                      {section.lectures.map(
                                        (lecture, index) => (
                                          <li
                                            key={index}
                                            className="pr-3 pl-4 h-10 d-flex items-center justify-between hover:bg-slate-200 cursor-pointer"
                                            onClick={(e) => {
                                              if (
                                                e.target.type !== 'checkbox'
                                              ) {
                                                const newSrc = `/upload/course/lectureVideo/${lecture.video}`;
                                                setData('video', lecture.video);
                                                setData(
                                                  'lectureContent',
                                                  lecture.content
                                                );
                                                setVideoSrc(newSrc);
                                                setContent(lecture.content);
                                              }
                                            }}
                                          >
                                            <div className="flex items-center gap-2">
                                              <div className="mb-4">
                                                <CFormCheck
                                                  id={`checkbox-${index}`}
                                                />
                                              </div>
                                              {lecture.video ? (
                                                <i className="la la-play-circle" />
                                              ) : (
                                                <i className="la la-file" />
                                              )}
                                              <span>
                                                {lecture.lecture_title}
                                              </span>
                                            </div>
                                            <span>03:09</span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}

                                {/* end collapse */}
                              </div>
                            );
                          })}
                        </div>
                        {/* end generic-accordion */}
                      </div>
                      {/* end course-dashboard-side-content */}
                    </div>
                    {/* end course-dashboard-sidebar-wrap */}
                  </div>
                  {/* end course-dashboard-sidebar-column */}
                </div>
                {/* end course-dashboard-container */}
              </div>
              {/* end course-dashboard-wrap */}
            </section>
          </div>
          <div onClick={scrollToTop} id="scroll-top">
            <i className="la la-arrow-up" title="Go top" />
          </div>
        </>
      )}
    </HelmetProvider>
  );
};

export default ViewCourse;
