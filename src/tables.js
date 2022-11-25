import React from "react";
import Tableme from "./table";
import TextField from "@mui/material/TextField";
class Tables extends React.Component {
  state = {
    upto: 4,
  };

  setUpto = () => {
    if (parseInt(document.getElementById("upto").value))
      this.setState({
        upto: parseInt(document.getElementById("upto").value),
      });
    else
      this.setState({
        upto: 0,
      });
  };

  setField = () => {
    if (this.state.upto === 0) return "";
    return this.state.upto;
  };
  render() {
    return (
      <>
        <TextField
          id="upto"
          value={this.setField()}
          onChange={this.setUpto}
          type="number"
          label="upto"
          variant="filled"
        />

        <Tableme upto={this.state.upto} id="1"></Tableme>
      </>
    );
  }
}
export default Tables;
