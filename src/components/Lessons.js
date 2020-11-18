import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./MainProvider";

export const Lessons = ({ match }) => {
  const { data } = useContext(MainContext);

  return (
    <div className="container">
      <div className="row mb-2 justify-content-center">
        <div className="col-12">
          <h1 className="text-center text-monospace my-4">
            Lesson {Number(match.params.id) + 1}
          </h1>
        </div>
        {data[`${match.params.id}`].map((index) => (
          <div key={index.id} className="col-12">
            <div className="row">
              <div className="col-12 bg-info my-1 p-2 pl-4">
                <p className="m-0 pt-2 text-capitalize font-weight-bolder font-italic">
                  {index.german}
                </p>
                <p className="m-0 pb-2 text-capitalize text-monospace">
                  {index.english}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12">
          <Link
            to="/lessonsMain"
            className="btn btn-block bg-primary w-100 my-2 p-1 text-monospace text-capitaliz"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};
