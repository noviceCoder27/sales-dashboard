import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineGraph = ({data}) => {
  const d3Container = useRef(null);
  const graphData = data?.map(product => ({
    date: new Date(product.orderedAt),
    quantity: product.quantity
}));

  useEffect(() => {
    if (d3Container.current && data) {
      const data = graphData

      const margin = {top: 10, right: 30, bottom: 30, left: 60},
          width = 860 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

      d3.select(d3Container.current).selectAll("svg").remove();

      const svg = d3.select(d3Container.current)
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

      const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.quantity; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));

      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.quantity) })
        )
      svg.append("text")
      .attr("x", "10rem" )
      .attr("y", "2px")
      .style("text-anchor", "middle")
      .style("font-weight","bold")
      .text("Orders placed vs Time Period");
    }
  }, [data]);

  return (
    <div ref= {d3Container} />
  );
}

export default LineGraph;
