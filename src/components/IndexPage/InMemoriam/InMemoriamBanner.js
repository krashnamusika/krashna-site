import React from "react";
import DaanAdmiraalImage from "../daan-admiraal.jpg";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-10">
            <img src={DaanAdmiraalImage} className="img-fluid" style={{ height: "450px" }} />
          </div>
          <div className="col-md-8 col-12">
            <div className="my-auto text-center">
              <h2 className="mt-5 mb-3">In Memoriam: Daan Admiraal</h2>
              <p className="lead">Onverwacht overleden, onze geliefde dirigent</p>
              <h4 className="mb-3">Daan Admiraal</h4>
              <p>Eindhoven, 11 april 1949 - Müstair, 22 juli 2018</p>
              <p className="font-italic mt-5">Nu is er stilte</p>
            </div>
            <div className="text-center">
              <Link className="btn btn-secondary mt-4" to="/in-memoriam">
                In memoriam
                <i className="fa fa-caret-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
