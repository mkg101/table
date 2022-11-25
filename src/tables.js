import React from "react";
import Tableme from "./table";
import TextField from "@mui/material/TextField";
class Tables extends React.Component {
  state = {
    upto: 10,
  };

  setUpto = () => {
    this.setState({
      upto: parseInt(document.getElementById("upto").value),
    });
  };
  render() {
    return (
      <>
        <TextField
          id="upto"
          value={this.state.upto}
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
