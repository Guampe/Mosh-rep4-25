import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
    //en tutorial en lugar count ponen value
  };

  //  constructor() {
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //  }
  // Todo esto lo reemplaza el arrow funtion del handleIncrement

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
    //...................en tutorial en lugar count ponen value
    //obj.method();
    //function();
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          + Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero Pollitos" : value;
  }
}

export default Counter;
