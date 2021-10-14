import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    marginBottom: 40,
    maxWidth: "1160px",
    [theme.breakpoints.down("sm")]: {
      display: "flex", 
      flexDirection: "column",
      alignItems: "center"
    }
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  typography: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  btn: {
    width: "80%",
  },
  headerInfo: {
    fontSize: "1.8em",
    fontWeight: 700,
  },
  cardsGroup: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: 60,
      alignItems: "center"
    }
  },
  card: {
    height: 550,
    width: 320,
    backgroundColor: "transparent",
    color: "white",
    margin: "50px 0px",
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      marginTop: "0px"
    }
  },
  img: {
    height: "85%",
    [theme.breakpoints.down("sm")]: {
      height: "70%"
    }
  },
  info: {
    paddingLeft: 0,
  },
  price: {
    marginTop: 5,
    fontWeight: 700,
  },
}));

const CardDestination = ({ destination, price, img }) => {
  const classes = useStyle();
  return (
    <Card className={classes.card} elevation={0}>
      <CardMedia className={classes.img} image={img} />
      <CardContent className={classes.info}>
        <Typography variant={"h5"}>{destination}</Typography>
        <Typography color={"primary"} variant={"h5"} className={classes.price}>
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

const TopDestination = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Box className={classes.header}>
        <div className={classes.typography}>
          <Typography className={classes.headerInfo}>
            {"We provide top"}
          </Typography>
          <Typography className={classes.headerInfo}>
            {"destination"}
          </Typography>
        </div>
        <Hidden xsDown>
          <Button>{"View All"}</Button>
        </Hidden>
      </Box>
      <Box className={classes.cardsGroup}>
        <CardDestination
          img={"/img/card-background- destination-2.jpg"}
          destination={"Bali, Indonesia"}
          price="250"
        />
        <CardDestination
          img={"/img/card-background- destination-2.jpg"}
          destination={"Bali, Indonesia"}
          price="250"
        />
        <CardDestination
          img={"/img/card-background- destination-2.jpg"}
          destination={"Bali, Indonesia"}
          price="250"
        />
      </Box>
      <Hidden smUp>
        <Button className={classes.btn}>{"View All"}</Button>
      </Hidden>
    </Container>
  );
};

export default TopDestination;
