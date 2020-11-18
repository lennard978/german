import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./MainProvider";
export const LessonsMain = () => {
  const { btnValue } = useContext(MainContext);
  const [btn] = btnValue;

  return (
    <div className="container">
      <div className="row justify-content-center">
        {btn.map((index) => (
          <div key={index.id} className="col-12 col-sm-6">
            <Link
              to={`/lessonsMain/${index.id}`}
              className={`btn ${index.back} btn-block my-2 p-3 font-weight-bolder text-monospace text-capitalize`}
            >
              {index.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
