import React, { Component, Fragment } from "react";
import "./Home.css";
import Progress from "./Progress.jpg";
import ProgressLogo from "./Progress Logo.png";
import Operations2 from "./Operations2.jpg";
import OperationsLogo from "./Operations Logo.png";
import Engineering from "./Engineering.jpg";
import EngineeringLogo from "./Engineering Logo.png";
import Electronics from "./Electronics.jpg";
import ElectronicsLogo from "./Electronics Logo.png";
import Maintenance from "./Maintenance.jpg";
import MaintenanceLogo from "./Maintenance Logo.png";
import Accounting from "./Accounting.jpg";
import AccountingLogo from "./Accounting Logo.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "portfolio-img-background",
      className2: "portfolio-img-background",
      className3: "portfolio-img-background",
      className4: "portfolio-img-background",
      className5: "portfolio-img-background",
      className6: "portfolio-img-background",
    };
  }
  hover1 = () => {
    this.setState({
      className1:
        this.state.className1 === "portfolio-img-background-dark"
          ? "portfolio-img-background"
          : "portfolio-img-background-dark",
    });
  };
  hover2 = () => {
    this.setState({
      className2:
        this.state.className2 === "portfolio-img-background-dark"
          ? "portfolio-img-background"
          : "portfolio-img-background-dark",
    });
  };
  hover3 = () => {
    this.setState({
      className3:
        this.state.className3 === "portfolio-img-background-dark"
          ? "portfolio-img-background"
          : "portfolio-img-background-dark",
    });
  };
  hover4 = () => {
    this.setState({
      className4:
        this.state.className4 === "portfolio-img-background-dark"
          ? "portfolio-img-background"
          : "portfolio-img-background-dark",
    });
  };
  hover5 = () => {
    this.setState({
      className5:
        this.state.className5 === "portfolio-img-background-dark"
          ? "portfolio-img-background"
          : "portfolio-img-background-dark",
    });
  };
  hover6 = () => {
    this.setState({
      className6:
        this.state.className6 === "portfolio-img-background-dark"
          ? "portfolio-img-background"
          : "portfolio-img-background-dark",
    });
  };
  render() {
    return (
      <Fragment>
        <div className="content-wrapper">
          <div className="portfolio-items-wrapper">
            <div className="portfolio-item-wrapper">
              <div
                className={this.state.className1}
                style={{ backgroundImage: `url(${Progress})` }}
              />
              <div
                className="img-text-wrapper"
                onMouseOver={() => this.hover1()}
                onMouseOut={() => this.hover1()}
              >
                <div className="logo-wrapper">
                  <a href="/JobStatus.html">
                    <img src={ProgressLogo} alt="Progress Logo" />
                  </a>
                </div>
                <div className="subtitle">Job Status</div>
              </div>
            </div>
            <div className="portfolio-item-wrapper">
              <div
                className={this.state.className2}
                style={{ backgroundImage: `url(${Operations2})` }}
              />
              <div
                className="img-text-wrapper"
                onMouseOver={() => this.hover2()}
                onMouseOut={() => this.hover2()}
              >
                <div className="logo-wrapper">
                  <a href="Operations.html">
                    <img src={OperationsLogo} alt="Operations Logo" />
                  </a>
                </div>
                <div className="subtitle">Operations</div>
              </div>
            </div>
            <div className="portfolio-item-wrapper">
              <div
                className={this.state.className3}
                style={{ backgroundImage: `url(${Engineering})` }}
              />
              <div
                className="img-text-wrapper"
                onMouseOver={() => this.hover3()}
                onMouseOut={() => this.hover3()}
              >
                <div className="logo-wrapper">
                  <a href="Engineering.html">
                    <img src={EngineeringLogo} alt="Engineering Logo" />
                  </a>
                </div>
                <div className="subtitle">Engineering</div>
              </div>
            </div>
            <div className="portfolio-item-wrapper">
              <div
                className={this.state.className4}
                style={{ backgroundImage: `url(${Electronics})` }}
              />
              <div
                className="img-text-wrapper"
                onMouseOver={() => this.hover4()}
                onMouseOut={() => this.hover4()}
              >
                <div className="logo-wrapper">
                  <a href="Electronics.html">
                    <img src={ElectronicsLogo} alt="Electronics Logo" />
                  </a>
                </div>
                <div className="subtitle">Electronics</div>
              </div>
            </div>
            <div className="portfolio-item-wrapper">
              <div
                className={this.state.className5}
                style={{ backgroundImage: `url(${Maintenance})` }}
              />
              <div
                className="img-text-wrapper"
                onMouseOver={() => this.hover5()}
                onMouseOut={() => this.hover5()}
              >
                <div className="logo-wrapper">
                  <a href="Maintenance.html">
                    <img src={MaintenanceLogo} alt="Maintenance Logo" />
                  </a>
                </div>
                <div className="subtitle">Maintenance</div>
              </div>
            </div>
            <div className="portfolio-item-wrapper">
              <div
                className={this.state.className6}
                style={{ backgroundImage: `url(${Accounting})` }}
              />
              <div
                className="img-text-wrapper"
                onMouseOver={() => this.hover6()}
                onMouseOut={() => this.hover6()}
              >
                <div className="logo-wrapper">
                  <a href="Accounting.html">
                    <img src={AccountingLogo} alt="Accounting Logo" />
                  </a>
                </div>
                <div className="subtitle">Accounting</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
