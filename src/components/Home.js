import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center vh-100 align-items-center">
        <div className="col-6">
          <Link className="btn btn-primary btn-block" to="/lessonsMain">
            Lessons
          </Link>
          <Link className="btn btn-secondary btn-block" to="/grammaryMain">
            Grammary
          </Link>
          <Link className="btn btn-warning btn-block" to="/pronounceMain">
            Pronounce
          </Link>
          <Link className="btn btn-success btn-block" to="/cardsMain">
            Cards
          </Link>
          <Link className="btn btn-dark btn-block" to="/testMain">
            Test
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
