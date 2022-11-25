import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
class Tableme extends React.Component {
  state = {
    num: 7,
  };

  setNum = () => {
    this.setState({
      num: parseInt(document.getElementById(this.props.id).value),
    });
  };

  arr = () => {
    return [...Array(this.props.upto)].map((_, index) => index + 1);
  };

  render() {
    return (
      <>
        <TextField
          id={this.props.id}
          value={this.state.num}
          onChange={this.setNum}
          type="number"
          label="number"
          variant="filled"
        />
        {/* {this.arr().map((n) => (
          <div key="n">
            {this.state.num} * {n} = {this.state.num * n}
          </div>
        ))} */}
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 250 }} aria-label="simple table">
            <TableBody>
              {this.arr().map((n) => (
                <TableRow
                  key={n}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{this.state.num}</TableCell>
                  <TableCell align="right">*</TableCell>
                  <TableCell align="right">{n}</TableCell>
                  <TableCell align="right">=</TableCell>
                  <TableCell align="right">{this.state.num * n}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default Tableme;
