import React from "react";
import './home.css'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://github.com/Egman123?tab=repositories" className="home__social-link" target="_blank">
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://www.linkedin.com/in/exishe-manukyan/" className="home__social-link" target="_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://www.codewars.com/users/Eghishe" className="home__social-link" target="_blank">
        <i className="fa-solid fa-code"></i>
      </a>

    </div>
  );
};

export default HeaderSocials;
