import React, { Component } from "react";
import "./filterSection.style.css";
import { years } from "../../data/years";
class FilterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: "",
      landStatus: null,
      launchStatus: null,
    };
  }
  handleFilter = (year, landStatus, launchStatus) => {
    this.setState(
      {
        selectedYear: year.toString(),
        landStatus: landStatus,
        launchStatus: launchStatus,
      },
      () => this.props.applyFilter(this.state)
    );
  };
  render() {
    const { landStatus, launchStatus, selectedYear } = this.state;
    return (
      <div className="column left filterSection">
        <h3>Filters</h3>
        <button type="button" onClick={() => window.location.reload(false)}>
          Clear
        </button>
        <h4>Launch Year</h4>
        <div className="filter">
          {years.map((year) => (
            <button
              key={year}
              type="checkbox"
              className={selectedYear === year.toString() ? "yearSelected" : ""}
              onClick={() => this.handleFilter(year, landStatus, launchStatus)}
            >
              {year}
            </button>
          ))}
        </div>
        <h4>Successful Landing</h4>
        <div className="filter">
          <button
            type="checkbox"
            className={landStatus !== null && landStatus ? "landStatus" : ""}
            onClick={() => this.handleFilter(selectedYear, true, launchStatus)}
          >
            True
          </button>
          <button
            type="checkbox"
            className={landStatus !== null && !landStatus ? "landStatus" : ""}
            onClick={() => this.handleFilter(selectedYear, false, launchStatus)}
          >
            False
          </button>
        </div>
        <h4>Successful Launch</h4>
        <div className="filter">
          <button
            type="checkbox"
            className={
              launchStatus !== null && launchStatus ? "launchStatus" : ""
            }
            onClick={() => this.handleFilter(selectedYear, landStatus, true)}
          >
            True
          </button>
          <button
            type="checkbox"
            className={
              launchStatus !== null && !launchStatus ? "launchStatus" : ""
            }
            onClick={() => this.handleFilter(selectedYear, landStatus, false)}
          >
            False
          </button>
        </div>
      </div>
    );
  }
}

export default FilterSection;
