import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import test from "../assets/video/test.mp4";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  backBox: {
    height: "70vh",
    width: "90vw",
    backgroundColor: "#353535",
    position: "absolute",
    left: 0,
    marginTop: 80,
  },
  headers: {
    display: "flex",
    justifyContent: "space-between",
    margin: "80px 10vw",
    [theme.breakpoints.up(1660)]: {
      marginLeft: "20vw",
      marginRight: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  aboutUs: {
    fontSize: "1.8em",
    fontWeight: 700,
  },
  video: {
    width: "70vw",
    margin: "0px 10vw",
    [theme.breakpoints.up(1660)]: {
      marginLeft: "20vw",
      width: "60vw",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0px 5vw",
      width: "80vw",
    },
  },
}));

const AboutUs = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Box className={classes.backBox}>
        <Box className={classes.headers}>
          <Typography className={classes.aboutUs}>{"About Us"}</Typography>
          <Box>
            <Typography>{"We belive in a traveling experience by"}</Typography>
            <Typography>
              {"providing our tour plan that suits your the best"}
            </Typography>
          </Box>
        </Box>
        <video className={classes.video} controls>
          <source src={test} type="video/mp4" />
        </video>
      </Box>
    </Container>
  );
};

export default AboutUs;
