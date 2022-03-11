import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const datapointvalues = props.datapoints.map(datapoint => datapoint.value);
  const totalMaximumValue = Math.max(...datapointvalues);
  return (
    <div className="chart">
      {props.datapoints.map(datapoint =>
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximumValue}
          label={datapoint.label}
        />
      )}
    </div>
  );
};
export default Chart;
