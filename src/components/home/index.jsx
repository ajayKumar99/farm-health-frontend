import React from "react";
import NavBar from "../navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="main__content home__bg">
      <div className="overlay"></div>
      <NavBar />
      <div className="header__container container">
        <div className="header__content">
          <h5 className="header__subtitle subtitle">
            Grow your rice to its fullest
          </h5>
          <h1>
            Analyze your rice leaf diseases
          </h1>
          <p>Finding and analyzing the diseases eating your rice crops have never been this easy. Find the solution in this platform before it spreads.</p>
          <a class="btn btn-default btn-outline" href="/analyze" role="button">Analyze Now</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
