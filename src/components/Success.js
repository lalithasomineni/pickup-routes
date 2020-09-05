import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'style={{opacity:.8}}
          >
            <AppBar title="Success"/>
            <h1>Thank You our agent will be picking your clothes shortly</h1>
            <br/>
            <br/>
            <p>You will get a call in the given slot please be available</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
