import React, { Component } from "react";
import "./App.css";
import MissionList from "./components/MissionList/missionList.component";
import FilterSection from "./components/FilterSection/filterSection.component";
import NoItem from "./components/NoItems/noItem.component";
import ShowLoading from "./components/showLoading/showLoading.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionList: this.props.initialData,
      showLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ showLoading: false });
    // fetch("https://api.spacexdata.com/v3/launches?limit=100")
    //   .then((response) => response.json())
    //   .then((res) => this.setState({ missionList: res, showLoading: false }));
  }

  applyFilter = ({ selectedYear = "", landStatus, launchStatus }) => {
    var LAND_URL = "";
    var LAUNCH_URL = "";
    var SELECTED_YEAR = "";
    LAND_URL = landStatus !== null ? `land_success=${landStatus}` : "";
    LAUNCH_URL = launchStatus !== null ? `launch_success=${launchStatus}&` : "";
    if (selectedYear !== "") {
      SELECTED_YEAR = `launch_year=${selectedYear}&`;
    }
    this.setState({
      showLoading: true,
    });
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&` +
        SELECTED_YEAR +
        LAUNCH_URL +
        LAND_URL
    )
      .then((response) => response.json())
      .then((res) => this.setState({ missionList: res, showLoading: false }));
  };
  render() {
    const { missionList, showLoading } = this.state;
    return (
      <div className="App">
        <h1>SpaceX Launch Programs</h1>
        <div className="row">
          <FilterSection applyFilter={this.applyFilter} />
          {missionList.length > 0 ? (
            <MissionList missionList={missionList} />
          ) : (
            <NoItem />
          )}
          {showLoading && <ShowLoading />}
        </div>
      </div>
    );
  }
}

export default App;
