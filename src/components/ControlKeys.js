import React, { Component } from "react";
import upArrow from "./../assets/arrow-alt-circle-up-regular.svg";
import downArrow from "./../assets/arrow-alt-circle-down-regular.svg";
import leftArrow from "./../assets/arrow-alt-circle-left-regular.svg";
import rightArrow from "./../assets/arrow-alt-circle-right-regular.svg";

const arrows = {
  ArrowUp: upArrow,
  ArrowDown: downArrow,
  ArrowLeft: leftArrow,
  ArrowRight: rightArrow
};

class ControlKeys extends Component {
  constructor() {
    super();
    this.state = {
      upArrow: { color: "" },
      downArrow: { color: "" },
      rightArrow: { color: "" },
      leftArrow: { color: "" },
      color: ""
    };
  }

  // changeColor = e => {
  //   let arrow;
  //   if (e.key === "ArrowUp") {
  //     arrow = "upArrow";
  //   } else if (e.key === "ArrowDown") {
  //     arrow = "downArrow";
  //   } else if (e.key === "ArrowLeft") {
  //     arrow = "leftArrow";
  //   } else if (e.key === "ArrowRight") {
  //     arrow = "rightArrow";
  //   }

  //   this.setState({
  //     [arrow]: { color: "lightblue" }
  //   });
  // };

  render() {
    return (
      <div className="controlKeys">
        {Object.keys(arrows).map(arrow => {
          return (
            <img
              src={arrows[arrow]}
              alt=""
              key={arrow}
              className={arrow}
              onClick={() => this.props.clickHandler(arrow)}
            />
          );
        })}
      </div>
    );
  }
}

export default ControlKeys;
