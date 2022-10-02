import React from "react";
import {Helmet} from "react-helmet";
import PropTypes from "prop-types";

const SeoBlock = ({ HeadTitle, HeadDescription }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{HeadTitle ? HeadTitle : "E-commerce App"}</title>
            <meta name="description" content={HeadDescription ? HeadDescription : "E-commerce App"} />
        </Helmet>
    );
};

SeoBlock.propTypes = {
    HeadTitle: PropTypes.any,
    HeadDescription: PropTypes.any,
};

export default SeoBlock;