import React from "react";
import "./Foot__search.css";
function Foot__search() {
  return (
    <div>
      <div className="container">
        <div className="foot__serach">
          <div className="footer__buttons">
            <button
              type="button"
              class="btn btn-outline-primary cod-1"
              style={{
                width: "114px",
                height: "47px",
                borderRadius: "100px",
                border: "2px",
                border: "2px solid #3585F9",
              }}
            >
              Foot Care
            </button>
            <button
              type="button"
              class="btn btn-outline-primary cod-1"
              style={{
                width: "163px",
                height: "47px",
                borderRadius: "100px",
                border: "2px",
                border: "2px solid #3585F9",
              }}
            >
              Soft Tissue Issue
            </button>
            <button
              type="button"
              class="btn btn-outline-primary cod-1"
              style={{
                width: "117px",
                height: "47px",
                borderRadius: "100px",
                border: "2px",
                border: "2px solid #3585F9",
              }}
            >
              Pediatrics
            </button>
          </div>
          <div className="footer__br">
            <button
              type="button"
              class="btn btn-outline-primary cod-1"
              style={{
                width: "112px",
                height: "47px",
                borderRadius: "100px",
                border: "2px",
                border: "2px solid #3585F9",
              }}
            >
              Foot Pain
            </button>
            <button
              type="button"
              class="btn btn-outline-primary cod-1"
              style={{
                width: "130px",
                height: "47px",
                borderRadius: "100px",
                border: "2px",
                border: "2px solid #3585F9",
              }}
            >
              Bone Issues
            </button>
          </div>
          <div className="footer__inp">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot__search;
