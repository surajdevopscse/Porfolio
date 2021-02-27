import React from "react";
import "./footer.css";
const Footer_component = () => {
  return (
    <div>
      <div className='py-2 text-center footer-style'>
        © Er Suraj Yadav &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer_component;
