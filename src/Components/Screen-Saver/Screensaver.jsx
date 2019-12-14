import React from "react";
import "../../Assets/ScreenSaver-Styles/ScreenSaver.css";
class ScreenSaver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "...",
      month: "",
      year: "",
      date: "",
      week: "",
      stamp: ""
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
    this.getCurrentMonth();
    this.getCurrentYear();
    this.getWeekDay();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
    var a = this.state.time.split(":");
    if (a[0] > 12) {
      this.setState({ stamp: "P.M" });
    } else {
      this.setState({ stamp: "A.M" });
    }
  }
  getCurrentMonth = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const d = new Date();
    this.setState({ month: monthNames[d.getMonth()] });
  };
  getCurrentYear = () => {
    var currentYear = new Date().getFullYear();
    var todayDate = new Date().getDate();
    this.setState({ year: currentYear, date: todayDate });
  };
  getWeekDay = () => {
    const weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    const wekday = new Date();
    this.setState({ week: weekDays[wekday.getDay()] });
  };
  render() {
    return (
      <div className="Screen-Saver-Main">
        <div className="Screen-Saver-init">
          <div className="Screen-Saver-body">
            <div className="Screen-Saver-temp">12°</div>
            <div className="Screen-Saver-cloudInfo">
              <div className="Screen-Saver-weather">
                <span className="Scattred-Cloudes">Scattred Cloudes</span>
                <span className="Mississauga">Mississauga / Canada</span>
              </div>
              <div className="Cloud-Icon">
                <i className="fas fa-cloud-moon" id="icon"></i>
              </div>
            </div>

            <div className="Screen-Saver-Timer">
              {this.state.time}
              <span className="pm">{this.state.stamp}</span>
            </div>

            <div className="Screen-Saver-DMY">
              <span>
                {this.state.week}, {this.state.date}
              </span>
              <span>
                {this.state.month} {this.state.year}
              </span>
            </div>
            <div className="Screen-Saver-line">
              <hr className="Hr" />
            </div>
            <div className="Screen-Saver-boxes">
              <div className="box-cont-1">
                <div className="boxes">
                  <i id="icon2" className="material-icons">
                    {" "}
                    person_outline
                  </i>
                </div>
                <div className="boxes">
                  <i id="icon2" className="material-icons">
                    {" "}
                    message
                  </i>
                </div>
              </div>
              <div className="box-cont-1">
                <div className="boxes">
                  {" "}
                  <i id="icon2" className="material-icons">
                    {" "}
                    folder_open
                  </i>
                </div>
                <div className="boxesColor">
                  <i id="icon2" className="material-icons">
                    {" "}
                    add
                  </i>
                </div>
              </div>
            </div>
            <div className="Screen-Saver-icons">
              <div>
                <i id="icon3" className="fas fa-music"></i>
              </div>
              <div>
                <i id="icon3" className="fab fa-chrome"></i>
              </div>
              <div>
                <i id="icon3" className="fab fa-google"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ScreenSaver;
