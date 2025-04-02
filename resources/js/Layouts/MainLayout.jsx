import { useEffect, useState } from 'react';
import Footer from '@/Pages/Frontend/Components/Footer';
import Header from '@/Pages/Frontend/Components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster, toast } from 'react-hot-toast';
import { usePage } from '@inertiajs/react';
import Chatbot from '@/Pages/Frontend/Chatbot';
import MiniChatbot from '@/Pages/Frontend/MiniChatbot';

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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

          {/* Robot Icon (Opens Mini Chat) */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-5 left-5 z-50 bg-[#fff] w-[40px] h-[40px] p-4 rounded-full shadow-xl cursor-pointer hover:bg-[#ec5252] flex justify-center items-center group transition-all duration-300 ease-in-out"
            title="Chatbot"
          >
            <i className="las la-robot text-xl text-[#7f8897] group-hover:text-white transition-all duration-300 ease-in-out" />
          </div>

          {/* Mini Chat Window */}
          {isOpen && (
            <div className="fixed bottom-20 left-5 w-[35rem] h-[35rem] bg-white shadow-xl rounded-xl p-4 flex flex-col z-50">
              <div className="flex justify-between items-center pb-2 border-b">
                <h3 className="text-lg font-semibold">AI Chatbot</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-red-500"
                >
                  <i className="la la-close text-2xl" />
                </button>
              </div>
              <MiniChatbot />
            </div>
          )}
        </>
      )}
    </HelmetProvider>
  );
};

export default MainLayout;
