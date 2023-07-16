import React, { useState } from "react";
import "../../styles/Loader.css";
const Loader = (UpdatedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return (
      <div>
        {loading ? (
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        ) : (
          <UpdatedComponent {...props} />
        )}
      </div>
    );
  };
};

export default Loader;
