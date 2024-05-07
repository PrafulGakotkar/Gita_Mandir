import React from 'react'

function Progress() {
  return (
    <>
  {/* Progress bar Start */}
  <div className="section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <img src="assets/img/progress-bar/1.jpg" alt="img" />
        </div>
        <div className="col-lg-4 p-3 p-lg-0">
          <div className="sigma_box sigma_box-absolute sigma_box-lg m-0 sigma_box-progress">
            <i className="flaticon-hindu" />
            <div className="sigma_round-button mb-4">
              <span>
                {" "}
                <b className="counter" data-from={0} data-to={75}>
                  10
                </b>{" "}
                <span className="custom-primary">%</span>{" "}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="10px"
                y="10px"
                viewBox="0 0 197 197"
                enableBackground="new 0 0 197 197"
                xmlSpace="preserve"
              >
                 <circle class="sigma_round-button-stroke" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5"></circle>
                <circle class="sigma_progress-round sigma_round-button-circle" data-to="290" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5" style={{strokeDashoffset: "630px"}}></circle>
            
              </svg>
            </div>
            <h6>Temple Project Success Rate</h6>
            <p className="m-0 blockquote bg-transparent">
              {" "}
              Design better websites and spend less time without restricting{" "}
            </p>
          </div>
        </div>
        <div className="col-lg-4 z-index-3">
          <img src="assets/img/progress-bar/2.jpg" alt="img" />
        </div>
      </div>
    </div>
  </div>
  {/* Progress bar End */}
</>

  )
}

export default Progress