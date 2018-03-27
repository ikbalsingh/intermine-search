import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import classnames from 'classnames';
import { CardHeader, CardMedia } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import SimpleCard from './SimpleCard'
import Grid from 'material-ui/Grid';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title : {
    fontSize : 14,
  }
});

class ContainerCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{
        "width": "100%",
      }}> 
        <Card>
          <CardContent>
            <Typography className={classes.title}>
              RatMine
          </Typography>
          </CardContent>
          <CardContent style={{ "display": "inline-block", "margin": "auto" }}>
            <Grid container spacing={24}>
              <Grid item xs={6} sm={4}>
                <SimpleCard style={{ "margin": "10px" }} />
              </Grid>
              <Grid item xs={6} sm={4}>
                <SimpleCard style={{ "margin": "10px" }} />
              </Grid>
              <Grid item xs={6} sm={4}>
                <SimpleCard style={{ "margin": "10px" }} />
              </Grid>
            </Grid>
          </CardContent>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent style={{ "display": "inline-block", "margin": "auto" }}>
              <Grid container spacing={24}>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SimpleCard style={{ "margin": "10px" }} />
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}
ContainerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainerCard);