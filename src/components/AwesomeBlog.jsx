import { Container, Box, Typography, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "1160px",
    paddingBottom: "50px"
  },
  boxContainer: {
    background: theme.palette.background.paper,
    padding: "20px 120px",
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(769)]: {
      padding: "20px 40px"
    }
  },
  header: {
    fontSize: "1.8em",
    fontWeight: 700,
    margin: "20px 0px",
    [theme.breakpoints.down(769)]: {
      marginBottom: 0
    }
  },
  entries: {},
  entryContainer: {
    display: "flex",
    margin: "40px 0px",
    justifyContent: "space-between",
    [theme.breakpoints.down(671)]: {
      flexDirection: "column"
    }
  },
  date: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(671)]: {
      flexDirection: "row",
      alignItems: "end",
    }
  },
  day: {
    fontSize: "1.8em",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginRight: 10
    }
  },
  month: {
    fontSize: "0.8em",
  },
  title: {
    fontSize: "1.6em",
    width: "500px",
    [theme.breakpoints.down(769)]: {
      width: 400
    },
    [theme.breakpoints.down(671)]: {
      width: "100%",
      margin: "20px 0px"
    }
  },
  entryBtn: {
    backgroundColor: "transparent",
    color: "primary",
    "&:hover": {
      backgroundColor: "primary",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.primary.main,
      height: 30,
      width: 90
    }
  },
}));

const Entry = ({ day, month, title }) => {
  const classes = useStyle();
  return (
    <Box className={classes.entryContainer}>
      <Box style={{display: "flex", justifyContent: "space-between"}}>
        <Box className={classes.date}>
          <Typography className={classes.day}>{day}</Typography>
          <Typography className={classes.month}>{month}</Typography>
        </Box>
        <Hidden smUp>
          <Button className={classes.entryBtn}>Read More</Button>
        </Hidden>
      </Box>
      <Typography className={classes.title}>{title}</Typography>
      <Hidden only={"xs"}>
        <Button className={classes.entryBtn}>Read More</Button>
      </Hidden>
    </Box>
  );
};

const AwesomeBlog = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Box className={classes.boxContainer}>
        <Typography className={classes.header}>
          {"Read awesome blog"}
        </Typography>
        <Box className={classes.entries}>
          <Entry
            day={"10"}
            month={"Aprl 2021"}
            title={"Tips and tools for hosting in multiple languages"}
          />
          <Entry
            day={"08"}
            month={"Aprl 2021"}
            title={"Staging your home enviroment for your online experience"}
          />
          <Entry
            day={"10"}
            month={"Aprl 2021"}
            title={"Writing a clear and specific experience itinerary"}
          />
        </Box>
        <Button>{"See All New"}</Button>
      </Box>
    </Container>
  );
};

export default AwesomeBlog;
