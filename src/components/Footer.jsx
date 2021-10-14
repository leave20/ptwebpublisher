import {
  Container,
  Box,
  Typography,
  IconButton,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "1160px",
    paddingBottom: 40,
    paddingTop: 50,
    color: "#c4c4c4",
  },
  gridContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  buttonGroup: {
    color: "#fff",
    fontSize: "1.2rem",
  },
  columnHeader: {
    fontWeight: 700,
    fontSize: "1.2em",
    color: "#fff",
  },
  socialNetwork: {
    color: "#c4c4c4",
    paddingLeft: "0px",
    paddingBottom: 40
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Box className={classes.gridContainer}>
        <Grid container direction={"column"} spacing={3} lg={4} sm={5}>
          <Grid item>
            <Typography className={classes.columnHeader}>{"Logo"}</Typography>
          </Grid>
          <Grid item>
            <Typography>{"1920 Holden Street San Diego, LA"}</Typography>
          </Grid>
          <Grid item>
            <Typography>{"Call us: 1-800-323-3829"}</Typography>
          </Grid>
          <Grid item>
            <Box className={classes.buttonGroup}>
              <IconButton className={classes.socialNetwork}>
                <Twitter fontSize={"large"} />
              </IconButton>
              <IconButton className={classes.socialNetwork}>
                <Facebook fontSize={"large"} />
              </IconButton>
              <IconButton className={classes.socialNetwork}>
                <Instagram fontSize={"large"} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction={"row"} spacing={10} xs={12} sm={11}>
          {/*Tour*/}
          <Grid item xs={6} sm={6} md={3}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <Typography className={classes.columnHeader}>
                  {"Tour"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{"Thailand"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Vietnam"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Korea"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Mexico"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*Company*/}
          <Grid item xs={6} sm={6} md={3}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <Typography className={classes.columnHeader}>
                  {"Company"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{"About Us"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Bolg"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Media"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Contact Us"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*Resource*/}
          <Grid item xs={6} sm={6} md={3}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <Typography className={classes.columnHeader}>
                  {"Resource"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{"Blog"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Review"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Help Center"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*More*/}
          <Grid item xs={6} sm={6} md={3}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <Typography className={classes.columnHeader}>
                  {"More"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{"Terms & Conditions"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Privacy Policy"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"FAQ"}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/*<Typography style={{ marginTop: 20, marginBottom: -15, fontSize: "0.9em" }} align={"center"}>
        {"Copytight © 2021. By Carlosmca"}
  </Typography>*/}
    </Container>
  );
};

export default Footer;
