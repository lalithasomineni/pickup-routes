import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import '../UserDetails.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider className="pickup">
        <>
        <h1 className = "heading">book a pickup</h1>
          <Dialog className = "box"
            open
            fullWidth
            maxWidth= 'xs'
          >
            <AppBar title="book a pickup" />
            <h1>pickup details</h1>
            <TextField
              placeholder="select a slot"
              label="slot"
              onChange={handleChange('slot')}
              defaultValue={values.slot}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="enter the quantity of clothes"
              label="quantity"
              onChange={handleChange('quantity')}
              defaultValue={values.quantity}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
