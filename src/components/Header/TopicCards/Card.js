import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import spacing from "@material-ui/core/styles/spacing";
import { Hidden } from "@material-ui/core";

//import IMG from "./MZ.png";

const styles = theme => ({
  card: {
    maxWidth: "33%",
    height: "40%",
    display: "inline-grid",
    spacing: 2
  },
  media: {
    height: 140,
    overflow: "scroll"
  },
  root: {
    flexGrow: 1
  }
});

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title="Contemplative Reptile"
            src="..."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Solange?!
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title="Contemplative Reptile"
            src="..."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              SteamWorks
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title="Contemplative Reptile"
            src="..."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Slaytina
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
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

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
