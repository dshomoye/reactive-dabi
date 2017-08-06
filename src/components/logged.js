import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/*
    This is the submenu component to render if the user is logged in
*/


class Logged extends Component{

    handleSignOut = () => {
        console.log("Sign out clicked");
        this.props.signOut();
    }

    render() {
        return (
             <IconMenu 
             iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Reservations" />
    <MenuItem primaryText="Sign out" onTouchTap = {this.handleSignOut} />
  </IconMenu>
        );
    }
}

export default Logged;