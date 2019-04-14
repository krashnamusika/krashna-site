import React from 'react'
import DaanAdmiraalImage from '../daan-admiraal.jpg'

const InMemoriamPopup = ({ onPopupHide }) => {
  return (
    <div
      className="bg-dark text-white"
      style={{
        minHeight: '100vh',
        minWidth: '100%',
        zIndex: 1000,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <div
        className="container d-flex flex-column align-center h-100"
        style={{
          minHeight: '100vh',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}
      >
        <div className="my-auto text-center">
          <p className="lead">Onverwacht overleden, onze geliefde dirigent</p>
          <h2 className="mb-3">Daan Admiraal</h2>
          <p>Eindhoven, 11 april 1949 - Müstair, 22 juli 2018</p>
          <p>Nu is er stilte</p>
          <div className="row justify-content-center">
            <div className="col-md-3 col-10">
              <img
                src={DaanAdmiraalImage}
                className="img-fluid not-gray"
                alt="Daan Admiraal"
              />
            </div>
          </div>

          <div className="btn btn-secondary mt-4" onClick={onPopupHide}>
            Naar de site
            <i className="fa fa-caret-right ml-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InMemoriamPopup
