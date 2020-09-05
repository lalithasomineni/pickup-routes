import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Payment extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  render() {
    const {
      values: { slot,quantity,cost}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm' style={{opacity: .8}}
          >
            <AppBar title="Confirm User Data" />
            <List>
            <ListItem>
                <ListItemText primary="slot" secondary={slot} />
              </ListItem>

              <ListItem>
                <ListItemText primary="quantity" secondary={quantity} />
              </ListItem>

              <ListItem>
                <ListItemText primary="cost" secondary={cost} />
              </ListItem> 

            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >payment</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}


export default Payment;