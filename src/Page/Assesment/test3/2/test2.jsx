import React from "react";
import "./test2.css";
import doc from "./img/div.jpg";
import dor from "./img/div (1).jpg";
import cloc from "./img/div (2).jpg";
function Test2() {
  return (
    <div>
      <div className="assesment__box">
        <div className="container">
          <div className="assesment__center">
            <div className="assesment__card">
              <div className="card__test">
                <div className="card__1">
                  <h4>Diabetic Foot Assessment</h4>
                  <span>
                    <img src={doc} alt="" />
                    <span>Treatment Description</span>
                  </span>
                  <p>
                    An overall assessment to determine how healthy or how at
                    risk are
                    <br /> the diabetic patient’s feet. A dermatological,
                    vascular, neurological,
                    <br /> and musculoskeletal assessment will be performed.
                  </p>
                  <h5>Related foot issue pages:</h5>
                  <button className="btn btn-outline-primary">
                    Diabetic Foot Care
                  </button>
                </div>
                <div className="card__2">
                  <span>
                    <img src={dor} alt="" />
                    <span>What It Treats</span>
                  </span>
                  <p>
                    Determines overall foot health
                    <br /> of a diabetic patient.
                  </p>
                </div>
                <div className="card__3">
                  <span>
                    <img src={cloc} alt="" />
                    <span>Duration</span>
                  </span>
                  <p>30mins.</p>
                </div>
              </div>
              <div className="card__test">
                <div className="card__1">
                  <h4>Children’s Foot Assessment</h4>
                  <span>
                    <img src={doc} alt="" />
                    <span>Treatment Description</span>
                  </span>
                  <p>
                    An overall assessment to determine overall health of the
                    child’s feet. A <br />
                    dermatological, vascular, neurological, and musculoskeletal
                    <br />
                    assessment will be performed.
                  </p>
                  <h5>Related foot issue pages:</h5>
                  <span>
                    <button className="btn btn-outline-primary">
                      In Toe/Out Toe Gait
                    </button>
                    <button className="btn btn-outline-primary">
                      Toe Walking
                    </button>
                    <button className="btn btn-outline-primary">
                      Club Foot
                    </button>
                    <button className="btn btn-outline-primary">
                      Pediatric Flat Feet
                    </button>
                  </span>
                </div>
                <div className="card__2">
                  <span>
                    <img src={dor} alt="" />
                    <span>What It Treats</span>
                  </span>
                  <p>Overall foot health.</p>
                </div>
                <div className="card__3">
                  <span>
                    <img src={cloc} alt="" />
                    <span>Duration</span>
                  </span>
                  <p>30mins.</p>
                </div>
              </div>
              <div className="card__test">
                <div className="card__1">
                  <h4>General Foot Assessment</h4>
                  <span>
                    <img src={doc} alt="" />
                    <span>Treatment Description</span>
                  </span>
                  <p>
                    An overall assessment to determine the overall health of the
                    patient’s feet. <br />A dermatological, vascular,
                    neurological, and musculoskeletal
                    <br /> assessment will be performed.
                  </p>
                  <h5>Related foot issue pages:</h5>
                  <span>
                    <button className="btn btn-outline-primary">
                      Routine Foot Care
                    </button>
                    <button className="btn btn-outline-primary">
                      Flat Feet
                    </button>
                    <button className="btn btn-outline-primary">
                      Ankle Pain/Sprain
                    </button>
                    <button className="btn btn-outline-primary">
                      Athlete’s Foot
                    </button>
                  </span>
                </div>
                <div className="card__2">
                  <span>
                    <img src={dor} alt="" />
                    <span>What It Treats</span>
                  </span>
                  <p>Overall foot health assessment.</p>
                </div>
                <div className="card__3">
                  <span>
                    <img src={cloc} alt="" />
                    <span>Duration</span>
                  </span>
                  <p>30mins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test2;
