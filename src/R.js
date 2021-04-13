import React, { Component } from "react";
import Chart from "react-google-charts";
//import SubmissionSection from './SubmissionSection';

const pieOptions = {
    title: "Report",
    pieHole: 0.4,
    slices: [
        {
          color: "#F3BDCC"
        },
        {
          color: "#A0D7D3"
        },
      ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };
 
class R extends Component{
    render() {
    return (
      <div className="App">
      <h2>Monthly Report</h2>
      <Chart chartType="BarChart" width="100%" height="400px" data={[
  ["Month", "Projects", { role: "style" }],
  ["March", 2, "stroke-color: 233238; stroke-width: 1; fill-color: #F3BDCC"],
  ["April", 5, "stroke-color: 233238; stroke-width: 1; fill-color: #A0D7D3"],
  ["May", 3, "stroke-color: 233238; stroke-width: 1; fill-color: #F3BDCC"],
  ["June", 8, "stroke-color: 233238; stroke-width: 1; fill-color: #A0D7D3"],
  ["July", 6, "stroke-color: 233238; stroke-width: 1; fill-color: #F3BDCC"]
]} />
 <h2>Project Completion Report</h2>
         <Chart
          chartType="PieChart"
          data={[["Complete", "Working"], ["Complete Project", 7], ["Working Project", 4]]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    );
  }
}
export default R;