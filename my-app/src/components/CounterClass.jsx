import { Component, useState } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(newProps, prevState) {
    return {
      ...prevState,
      count: newProps.start || 0,
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  shouldComponentUpdate() {
    return true;
  }

  inc = () => {
    this.setState((preState) => {
      return {
        ...preState,
        count: preState.count + 1,
      };
    });
  };
  render() {
    return (
      <>
        <h1>
          {this.props.name || "Count"} : {this.state.count}
          <button onClick={this.inc}>Inc</button>
        </h1>
      </>
    );
  }
}

// export default Counter;
// hooks => function in react to perform a complex logic .
// each hooks start with "use"
// useState => [state,funToUpdateState]
