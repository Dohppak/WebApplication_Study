import React, { Component } from 'react';
import * as d3 from "d3"
import './App.css';

class App extends Component{
  state = {
    data : [10,20,30,16,28,40],
    width : 700,
    height : 500,
    id : 'root'
  }

  render(){
    return(
      <div className ="App">
        <BarChart
        data = {this.state.data}
        width = {this.state.width}
        height = {this.state.height}
        />
      </div>
    )
  }
}




class BarChart extends Component{
  componentDidMount(){
    this.drawCahrt();
  }
  
  drawCahrt(){
    const svg = d3.select("body").append("svg")
    .attr("width", this.props.width)
    .attr("height", this.props.height);

    svg.selectAll("rect")
      .data(this.props.data)
      .enter()
      .append("rect")
      .attr("x",(d, i) => i * 70)
      .attr("y",(d, i) => this.props.height - 10 * d)
      .attr("width", 65)
      .attr("height",(d, i) => d * 10)
      .attr("fill","black")

      svg.selectAll("text")
      .data(this.props.data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.props.height - (10 * d) - 3)
  }

  render(){
    return <div id={"#" + this.props.id}></div>
  }
}

export default App;