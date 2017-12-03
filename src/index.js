import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// https://frappe.github.io/charts/
const data = {
  labels: [
    "12am-3am",
    "3am-6am",
    "6am-9am",
    "9am-12pm",
    "12pm-3pm",
    "3pm-6pm",
    "6pm-9pm",
    "9pm-12am"
  ],

  datasets: [
    {
      title: "Some Data",
      values: [25, 40, 30, 35, 8, 52, 17, -4]
    },
    {
      title: "Another Set",
      values: [25, 50, -10, 15, 18, 32, 27, 14]
    },
    {
      title: "Yet Another",
      values: [15, 20, -3, -15, 58, 12, -17, 37]
    }
  ]
};

ReactDOM.render(<App data={data} />, document.getElementById("root"));
registerServiceWorker();
