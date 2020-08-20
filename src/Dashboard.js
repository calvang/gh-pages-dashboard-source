import React, { Component } from 'react';
import Graph from './Graph';

export default class Dashboard extends Component {
  render() {
    return(
      <div className="grid">
        <Graph 
          filename={"data1.csv"}
          title={"Arbitrary Graph 1"}
          xLabel={"Dates"}
          yLabel={"Counts (number of)"}
          lineLabel={"Counts"}
          lineColor={"#3e95cd"}
        />
        <Graph 
          filename={"data2.csv"}
          title={"Arbitrary Graph 2"}
          xLabel={"Dates"}
          yLabel={"Remnnants (number of)"}
          lineLabel={"Remnants"}
          lineColor={"#3e9523"}
        />
      </div>
    );
  }
}