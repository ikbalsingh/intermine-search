import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  organism: {
    fontWeight: "400"
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  function handleClick() {
    window.open('http://www.flymine.org/flymine/report.do?id=17006790')
  }
  return (
    <div>
      <Card className={classes.card} style={{ "margin": "15px" }} zdepth={1} >
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Gene
          </Typography>
          <Typography className={classes.organism}>
            Organism : Mus musculus
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Symbol : Brca1
          </Typography>
          <Typography component="p">
            PrimaryIdentifier : MGI:104537
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick} >Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);