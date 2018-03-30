import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import TemporaryDrawer from "./TemporaryDrawer"
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Image from './intermine2.png'
import Icon from 'material-ui/Icon';




const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: "auto"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navBar: {
        backgroundColor: "#fafafa",
        color: "black",
        position: "fixed",
        top: 0
    },
    image: {
        width: "12%",
        height: "20px"
    }
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navBar} >
                <Toolbar>
                    <Icon className={classes.flex} >
                        <img src={Image} className={classes.image} />
                    </Icon>
                    <Button> Help </Button>
                    <Button> Blog </Button>
                </Toolbar>

            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
