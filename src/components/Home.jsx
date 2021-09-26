import NavBar from "./NavBar";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `linear-gradient(rgb(255, 255, 255, 0), #222222), url(${"/home-background-image.jpg"})`,
    backgroundSize: "cover",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "90%",
    justifyContent: "center"
  },
  header: {
    fontWeight: 700,
    fontSize: "2.5rem",
  },
  subheader: {
    margin: "1.5em 0px"
  },
  btn: {
    margin: "20px 0px"
  }
}));

const Home = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <NavBar />
        <Container className={classes.container}>
          <Typography className={classes.header}>Tour around the world</Typography>
          <Typography className={classes.header}>with the new destination</Typography>
          <Box className={classes.subheader}>
            <Typography>We believe im a traveling experience by providing our tour</Typography>
            <Typography>plan that suits your the best!</Typography>
          </Box>
          <Button className={classes.btn}>Explore now</Button>
        </Container>
    </Box>
  );
};

export default Home;
