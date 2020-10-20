import React, { Component, Fragment } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Bar, Doughnut } from "react-chartjs-2";
import "./Job Status.css";

const state1status = {
  labels: ["Inventory Type"],
  datasets: [
    {
      label: "Current Sand",
      yAxisID: "A",
      data: [200000],
      stack: "Sand",
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
    {
      label: "Remaining Sand",
      yAxisID: "A",
      data: [400000],
      stack: "Sand",
      backgroundColor: ["rgba(255, 105, 86, 0.2)"],
      borderColor: ["rgba(255, 105, 86, 1)"],
      borderWidth: 1,
    },
    {
      label: "Current Slurry",
      yAxisID: "B",
      data: [1200],
      stack: "Slurry",
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
    {
      label: "Remaining Slurry",
      yAxisID: "B",
      data: [2400],
      stack: "Slurry",
      backgroundColor: ["rgba(84, 205, 235, 0.2)"],
      borderColor: ["rgba(84, 205, 235, 1)"],
      borderWidth: 1,
    },
    {
      label: "Current Acid",
      yAxisID: "C",
      data: [180],
      stack: "Acid",
      backgroundColor: ["rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
    {
      label: "Remaining Acid",
      yAxisID: "C",
      data: [95],
      stack: "Acid",
      backgroundColor: ["rgba(200, 102, 255, 0.2)"],
      borderColor: ["rgba(200, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const state2status = {
  labels: ["Inventory Type"],
  datasets: [
    {
      label: "Current Sand",
      yAxisID: "A",
      data: [200000],
      stack: "Sand",
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
    {
      label: "Remaining Sand",
      yAxisID: "A",
      data: [400000],
      stack: "Sand",
      backgroundColor: ["rgba(255, 105, 86, 0.2)"],
      borderColor: ["rgba(255, 105, 86, 1)"],
      borderWidth: 1,
    },
    {
      label: "Current Slurry",
      yAxisID: "B",
      data: [1200],
      stack: "Slurry",
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
    {
      label: "Remaining Slurry",
      yAxisID: "B",
      data: [2400],
      stack: "Slurry",
      backgroundColor: ["rgba(84, 205, 235, 0.2)"],
      borderColor: ["rgba(84, 205, 235, 1)"],
      borderWidth: 1,
    },
    {
      label: "Current Acid",
      yAxisID: "C",
      data: [180],
      stack: "Acid",
      backgroundColor: ["rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
    {
      label: "Remaining Acid",
      yAxisID: "C",
      data: [95],
      stack: "Acid",
      backgroundColor: ["rgba(200, 102, 255, 0.2)"],
      borderColor: ["rgba(200, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const state1stage = {
  labels: ["Current Stages", "Remaining Stages"],
  datasets: [
    {
      label: "Fleet 1 Stage Count",
      data: [60, 9],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
    },
  ],
};

const state2stage = {
  labels: ["Current Stages", "Remaining Stages"],
  datasets: [
    {
      label: "Fleet 1 Stage Count",
      data: [60, 9],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
    },
  ],
};
const options1status = {
  scales: {
    yAxes: [
      {
        id: "A",
        scaleLabel: {
          display: true,
          labelString: "Proppant (Tons)",
        },
        type: "linear",
        position: "left",
      },
      {
        id: "B",
        scaleLabel: {
          display: true,
          labelString: "Slurry (Bbls)",
        },
        type: "linear",
        position: "right",
        ticks: {
          max: 4000,
          min: 0,
        },
      },
      {
        id: "C",
        scaleLabel: {
          display: true,
          labelString: "Acid (Bbls)",
        },
        type: "linear",
        position: "right",
        ticks: {
          max: 300,
          min: 0,
        },
      },
    ],
  },
};

const options2status = {
  scales: {
    yAxes: [
      {
        id: "A",
        scaleLabel: {
          display: true,
          labelString: "Proppant (Tons)",
        },
        type: "linear",
        position: "left",
      },
      {
        id: "B",
        scaleLabel: {
          display: true,
          labelString: "Slurry (Bbls)",
        },
        type: "linear",
        position: "right",
        ticks: {
          max: 4000,
          min: 0,
        },
      },
      {
        id: "C",
        scaleLabel: {
          display: true,
          labelString: "Acid (Bbls)",
        },
        type: "linear",
        position: "right",
        ticks: {
          max: 300,
          min: 0,
        },
      },
    ],
  },
};

const options1stage = {
  maintainAspectRatio: false,
  responsive: true,
};

class JobStatus extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="mapcontainer">
            <Map
              className="map"
              google={this.props.google}
              zoom={8}
              initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
          </div>
          <div className="fleetgraphs">
            <div className="fleet1-status">
              <h4>Fleet 1 : Status</h4>
              <Bar data={state1status} options={options1status} />
            </div>
            <div className="fleet1-stage">
              <h4>Projected End Date:</h4>
              <Doughnut data={state1stage} options={options1stage} />
            </div>
            <div className="fleet2-status">
              <h4>Fleet 2 : Status</h4>
              <Bar data={state2status} options={options2status} />
            </div>
            <div className="fleet2-stage">
              <h4>Projected End Date:</h4>
              <Doughnut data={state2stage} options={options1stage} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(JobStatus);
