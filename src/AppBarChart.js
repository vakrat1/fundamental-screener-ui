import React from "react";
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';


const data = [
  { label: 'A', value: 50 },
  { label: 'B', value: 10 },
  { label: 'C', value: 20 },
  { label: 'D', value: 30 },
  { label: 'E', value: 40 }
];

const width = 500;
const height = 300;

// Define scales
const xScale = scaleBand({
  domain: data.map(d => d.label),
  padding: 0.2,
  range: [0, width]
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map(d => d.value))],
  range: [height, 0]
});

function BarChart() {
  return (
    <svg width={width} height={height}>
      <Group>
        {data.map(d => (
          <Bar
            key={d.label}
            x={xScale(d.label)}
            y={yScale(d.value)}
            width={xScale.bandwidth()}
            height={height - yScale(d.value)}
            fill="blue"
          />
        ))}
      </Group>
      <AxisBottom scale={xScale} top={height} />
      <AxisLeft scale={yScale} />
    </svg>
  );
}

export default BarChart