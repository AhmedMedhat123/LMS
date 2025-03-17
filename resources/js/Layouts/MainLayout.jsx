import { useEffect, useState } from 'react';
import Footer from '@/Pages/Frontend/Components/Footer';
import Header from '@/Pages/Frontend/Components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster, toast } from 'react-hot-toast';
import { usePage } from '@inertiajs/react';

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { flash, allCategories } = usePage().props;

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
          <Header allCategories={allCategories} />
          <Toaster position="top-right" reverseOrder={false} />
          <div>{children}</div>
          <Footer />
          <div onClick={scrollToTop} id="scroll-top">
            <i className="la la-arrow-up" title="Go top" />
          </div>
        </>
      )}
    </HelmetProvider>
  );
};

export default MainLayout;
