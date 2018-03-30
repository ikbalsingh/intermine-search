import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TestComponent from './TestComponent';
import SecondTestComponent from "./SecondTestComponent";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CheckBox from 'material-ui/Checkbox';
import SingleLineGridList from "./SingleLineGridList";
import SearchBar from './SearchBar'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridRight: {
        position: "fixed",
        right: 0,
        top : "25%"
    },
    container: {
        margin: "0px"
    }
});

function GridComponent(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.container} >
                <Grid item xs={6} sm={2}>
                    <TestComponent />
                </Grid>
                <Grid item xs={6} sm={8}>
                    <SearchBar />
                    <br />
                    <br />
                    <SingleLineGridList></SingleLineGridList>
                    <SingleLineGridList></SingleLineGridList>
                    <SingleLineGridList></SingleLineGridList>
                </Grid>
                <Grid item xs={6} sm={2} className={classes.gridRight}>
                    <SecondTestComponent />
                </Grid>
            </Grid>
        </div>
    );
}

GridComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridComponent);