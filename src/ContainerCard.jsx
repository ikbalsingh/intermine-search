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
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import ChevronRight from 'material-ui-icons/ChevronRight';
import Image from './45x45.png'
import SimpleCard from './SimpleCard'
import Grid from 'material-ui/Grid';
import $ from "jquery";
import Icon from 'material-ui/Icon';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
    marginTop: "-20px"
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
  cardHeader: {
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 14,
    fontWeight : "500"
  },
  image : {
    float : "right",
    width : "20px",
    height : "20px"
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
        "margin": "20px 0px",
      }}>
        <Card>
          <CardContent className={classes.cardHeader}>
            <Typography className={classes.title}>
              <Icon>
                <img src={Image} className = {classes.image} />
              </Icon>
              RatMine
          </Typography>
          </CardContent>
          <CardContent style={{ "display": "inline-block", "margin": "auto" }}>
            <Grid container spacing={24}>
              <Grid item xs={6} lg={4}>
                <SimpleCard style={{ "margin": "10px" }} />
              </Grid>
              <Grid item xs={6} lg={4}>
                <SimpleCard style={{ "margin": "10px" }} />
              </Grid>
              <Grid item xs={6} lg={4}>
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