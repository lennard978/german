import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./MainProvider";
import "./cards.css";

export const Cards = ({ match }) => {
  const { data } = useContext(MainContext);

  const [addOne, setAddOne] = useState(0);
  const germanCard = data[`${match.params.id}`][addOne].german;
  const englishCard = data[`${match.params.id}`][addOne].english;

  const [block, setBlock] = useState("enabled");

  const addOneHandler = (e) => {
    e.preventDefault();
    setAddOne(addOne + 1);
    if (addOne === data[`${match.params.id}`].length - 2) {
      setBlock("disabled");
    }
  };

  return (
    <div className="container">
      <div className="row mb-2 justify-content-center">
        <div className="col-12">
          <h1 className="text-center text-monospace font-weight-bold my-2">
            Cards {Number(match.params.id) + 1}
          </h1>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-12 shadow">
              <div className="box">
                <div className="wrapper">
                  <div className="frontPage">
                    <p className="text-capitalize font-weight-bolder">
                      {germanCard}
                    </p>
                  </div>
                  <div className="backPage">
                    <p className="text-capitalize font-weight-bold">
                      {englishCard}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <Link
            onClick={addOneHandler}
            to=""
            className={`btn btn-block shadow bg-primary w-100 mt-5 p-3 text-white text-capitalize ${block}`}
          >
            Next Card
          </Link>
          <Link
            to="/cardsMain"
            className="btn btn-block shadow bg-primary w-100 p-3 text-white text-capitalize"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
