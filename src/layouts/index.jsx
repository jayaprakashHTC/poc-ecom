import React from "react";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import PropTypes from "prop-types";
import "../assets/css/footerStyles.scss";
import "../assets/css/headerStyles.scss";
import "../assets/css/productsStyles.scss";
import "../assets/css/catgoryStyles.scss";
const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.any
};

export default Layout;