import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Shreya Gaikwad. </span> Software Developer
          </h1>

          <p className="home__description">
            Secure a responsible career opportunity to fully utilize my training
            and skills, while making a significant contribution to the success
            of company.
          </p>

          <Link to="/About" className="button">
            More About Me{}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>

        <div className="color__block"></div>
      </div>
    </section>
  );
};

export default Home;
