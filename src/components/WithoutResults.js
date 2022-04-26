import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import snorlax from "../assets/snorlax.gif";

export const WithoutResults = ({ text, itHasAStartButton }) => {
  return (
    <div className="d-flex row justify-content-center align-items-center">
      <div className="col-auto text-center">
        <img src={snorlax} alt="Cargando" className="img-fluid" />
        <h2>{text}</h2>
        {itHasAStartButton && (
          <Link to={`/`}>
            <CustomButton bsPrefix="details" name="Volver al inicio" />
          </Link>
        )}
      </div>
    </div>
  );
};
