import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes, url, title, type, recepient, issuer } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={ url }
          title={ title }
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            { recepient }
          </Typography>
          <Typography variant="subheading" component="h2">
            { title }
          </Typography>
          <Typography component="subheading">
            { type }
          </Typography>
          <Typography component="subheading">
            { issuer }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  recepient: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
