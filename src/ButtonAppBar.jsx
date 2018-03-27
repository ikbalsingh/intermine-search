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


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navBar: {
        backgroundColor: "white",
        color: "black"
    }
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navBar} >
                <Toolbar>
                    {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Title
                    </Typography>
                    <Button color="inherit">Login</Button> */}
                    <TemporaryDrawer />
                    <img src = {Image} style= {{"width" : "40px" , "height" : "20px"}}/>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
