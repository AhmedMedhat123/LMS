import Footer from "@/Pages/Frontend/Components/Footer";
import Header from "@/Pages/Frontend/Components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";



const MainLayout = ({ children }) => {
    return (
        <HelmetProvider>
            <Helmet>
                {/* Meta Tags */}
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta name="author" content="TechyDevs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                {/* Title */}
                <title>Aduca - Education HTML Template</title>

                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                {/* Favicon */}
                <link rel="icon" sizes="16x16" href="/images/favicon.png" />

                {/* CSS Files */}
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/line-awesome.css" />
                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="assets/css/bootstrap-select.min.css" />
                <link rel="stylesheet" href="assets/css/fancybox.css" />
                <link rel="stylesheet" href="assets/css/tooltipster.bundle.css" />
                <link rel="stylesheet" href="assets/css/leaflet.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
            </Helmet>

            <Header />

            {/* Page Content */}
            <div>{children}</div>

            <Footer />

            {/* JavaScript Files */}
            <script src="assets/js/jquery-3.4.1.min.js"></script>
            <script src="assets/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/bootstrap-select.min.js"></script>
            <script src="assets/js/owl.carousel.min.js"></script>
            <script src="assets/js/waypoint.min.js"></script>
            <script src="assets/js/jquery.counterup.min.js"></script>
            <script src="assets/js/main.js"></script>
        </HelmetProvider>
    );
};

export default MainLayout;
