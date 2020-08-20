import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { parseColumnsCSV } from './parseCSV';

export default class Graph extends Component {
  graphRef = React.createRef();

  componentDidMount() {
    const { filename, xLabel, yLabel, lineLabel, lineColor } = this.props;
    const thisChart = this.graphRef.current.getContext("2d");
    var filePath = `${process.env.PUBLIC_URL}/data/${filename}`;
    fetch(filePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        var dataArr =  parseColumnsCSV(text, ',');
        new Chart(thisChart, {
          type: "line",
          data: {
            labels: dataArr[0],
            datasets: [ 
              {
                label: lineLabel,
                data: dataArr[1],
                fill: false,
                borderColor: lineColor
              }
            ],
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: xLabel
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: yLabel
                }
              }]
            }
          }
        });
        console.log(dataArr)
      });
  }

  render() {
    const { title } = this.props;
    return(
      <div className="graph-container">
        <div style={{ padding: '5px' }}>
          { title }
        </div>
        <div className="graph">
          <canvas ref={this.graphRef}/>
        </div>
      </div>
    );
  }
}

Graph.propTypes = {
  filename: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  xLabel: PropTypes.string.isRequired,
  yLabel: PropTypes.string.isRequired,
  lineLabel: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired
};
