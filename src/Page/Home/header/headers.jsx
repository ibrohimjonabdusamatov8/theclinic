import logo from "./img/Asset 1 1.png";
import "./headers.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Headers() {
  function checkLength(e) {
    var maxLength = 9;
    var inputValue = e.target.value;
    if (inputValue.length > maxLength) {
      e.target.value = inputValue.slice(0, maxLength);
    }
  }
  const [active, setActive] = useState('inner');
  const fnOpen = () => {
    if (active === 'inner') {
      setActive("inner nav__active")
    } else setActive("inner")
  }

  return (
    <div>
      <header>
        <div className="container">
          <div className="header__text">
            <nav>
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <ul className={active}>
                <div className="close">
                  <i class="bi bi-x-lg" onClick={fnOpen}></i>
                </div>
                <li>
                  <Link to={"/xizmatlar"} onClick={fnOpen}>Xizmatlar</Link>
                </li>
                <li>
                  <Link to={"/foot"} onClick={fnOpen}>Muammolar</Link>
                </li>
                <li>
                  <Link to={"/about"} onClick={fnOpen}>Biz haqimizda</Link>
                </li>
                <li>
                  <Link to={"/faq"} onClick={fnOpen}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/cantact"} onClick={fnOpen}>Aloqa</Link>
                </li>
                <button
                  className="btn btn-primary uchrashuv__buton"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Uchrashuv brom qilish
                </button>


                <div
                  className="offcanvas offcanvas-end"
                  style={{ width: "777px", background: "#3585F9" }}
                  id="offcanvasRight"
                >
                  <div className="offcanvas-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <h3 className="offcanvas__h3">Sign up for an appointment</h3>
                    <p className="offcanvas__p">
                      It just takes few minutes to sign up and get fast,<br></br>
                      easy access to care, 24/7. No need for your<br></br>
                      insurance card yet
                    </p>
                    <div className="buuttons">
                      <div
                        className="btn-group"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "20px",
                        }}
                      >
                        <div
                          className="slelect"
                          style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "-20px",
                            marginLeft: "-20px",
                          }}
                        >
                          <div className="header__select">
                            <select className="custom-select mb-3">
                              <option selected>Choose a department</option>
                              <option value="1">.......</option>
                              <option value="2">.......</option>
                            </select>
                            <select className="custom-select mb-3">
                              <option value="0">Choose a doctor</option>
                              <option value="1">........</option>
                              <option value="2">........</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="header__inp__n1">
                        <div className="header__inp">
                          <input type="text" placeholder="YOUR NAME" />
                          <input type="tel" onInput={(e) => checkLength(e)} placeholder="PHONE" style={{ marginTop: '30px' }} />
                        </div>
                        <div className="header__inp1">
                          <input type="text" placeholder="YOUR EMAIL" />
                          <input type="text" placeholder="08/27/2022" style={{ marginTop: '30px' }} />
                        </div>
                      </div>
                      <div className="buuton">
                        <button className="buttooon">MAKE AN APPOINTMENT</button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
              <div className="burger__button">
                <i class="bi bi-list" onClick={fnOpen}></i>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Headers
