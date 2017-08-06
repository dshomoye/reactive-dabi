import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import Logged from './logged'


class Header extends Component{

    handleSignOut = () => {
        console.log("Sign out passed to header")
        this.props.signOut();
    }

    render() {
        return (
              <AppBar
    title={<span>Dabi</span>}
    iconElementLeft={<IconButton><ActionHome /></IconButton>}
    iconElementRight={this.props.logged ? <Logged  signOut = {this.handleSignOut} /> : <FlatButton label="Login"/>}
        />
        );
    }
}


export default Header;