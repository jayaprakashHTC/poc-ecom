import React from "react";
import {BsSearch} from "react-icons/bs";
const SearchSection = () => {
    return (
        <div className="search-bar">
            <div>
                <input type="text" className="formcontrol input" />
                <button type="button"className="formcontrol search-btn"><BsSearch /></button>
            </div>
        </div>
    );
};

export default SearchSection;