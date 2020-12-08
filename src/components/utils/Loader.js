import React from "react";

const Loader = () => {
    return (
        <div style={{height: "100%"}} className="d-flex justify-content-center align-items-center">
            <img
                className="d-block"
                src="https://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif"
                alt="loader"
            />
        </div>
    );
};

export default Loader;
