import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "65vw",
    paddingBottom: "30px",
    maxWidth: "1160px",
    [theme.breakpoints.down(1025)]: {
      width: "95vw",
    },
  },
  header: {
    fontWeight: 700,
    fontSize: "1.8rem",
  },
  cardContainer: {
    display: "flex",
    [theme.breakpoints.down(769)]: {
      flexDirection: "column",
    },
    justifyContent: "space-between",
    margin: "20px 0px",
  },
  cardRoot: {
    width: 260,
    height: 200,
    backgroundColor: "#353535",
    borderRadius: 20,
    boxShadow: "none",
    color: "#fff",
    padding: 15,
    [theme.breakpoints.down(769)]: {
      width: "auto",
      height: "auto",
      margin: "15px 0px",
    },
  },
  cardHeader: {
    fontWeight: 700,
    fontSize: "1.7rem",
    color: "#FF7033",
  },
}));

const OCards = ({ header, description }) => {
  const classes = useStyle();
  return (
    <Card className={classes.cardRoot}>
      <CardContent>
        <Typography className={classes.cardHeader}>{header}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

const WCOffer = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Typography align={"center"} className={classes.header}>
        What can we offer
      </Typography>
      <Typography align={"center"} className={classes.header}>
        for you
      </Typography>
      <Box className={classes.cardContainer}>
        <OCards
          header={"Various destinations"}
          description={
            "Aemean tempor tortor in metus pretiut sed faicibus liguia accumsan"
          }
        />
        <OCards
          header={"Various destinations"}
          description={
            "Aemean tempor tortor in metus pretiut sed faicibus liguia accumsan"
          }
        />
        <OCards
          header={"Various destinations"}
          description={
            "Aemean tempor tortor in metus pretiut sed faicibus liguia accumsan"
          }
        />
      </Box>
    </Container>
  );
};

export default WCOffer;
