import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Link,
  Button,
  IconButton,
  SwipeableDrawer,
} from "@material-ui/core";
import { FiMenu } from "react-icons/fi";
import { RiArrowUpSLine } from "react-icons/ri"
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    color: "inherit",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerButton: {
    margin: "0px 30px",
    color: "#c4c4c4",
    "&:hover": {
      cursor: "pointer",
    },
  },
  loginButton: {
    backgroundColor: "rgba(196, 196, 196, 0.45)",
    "&:hover": {
      backgroundColor: "rgba(196, 196, 196, 0.70)",
      transition: "all .5s",
    },
  },
  menu: {
    color: "white",
  },
  drawer: {
    borderRadius: "0 0 15px 15px",
    height: "23vh",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0 0 0",
    fontSize: "1.2rem",
    fontWeight: "700",
  },
}));

const NavBar = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClikckOpen = () => {
    setOpen(!open);
  };

  return (
    <AppBar elevation={0} className={classes.root} position="static">
      <Toolbar>
        <Container className={classes.navContainer}>
          Logo
          {window.screen.width >= 768 ? (
            <>
              <Box>
                <Link className={classes.centerButton}>Discovered</Link>
                <Link className={classes.centerButton}>Bolg</Link>
                <Link className={classes.centerButton}>Contact</Link>
              </Box>
              <Button className={classes.loginButton}>Login</Button>
            </>
          ) : (
            <>
              <IconButton onClick={handleClikckOpen} className={classes.menu}>
                <FiMenu />
              </IconButton>
              <SwipeableDrawer
                anchor={"top"}
                open={open}
                onClose={handleClikckOpen}
                PaperProps={{ className: classes.drawer }}
              >
                <Link className={classes.centerButton}>Discovered</Link>
                <Link className={classes.centerButton}>Bolg</Link>
                <Link className={classes.centerButton}>Contact</Link>
                <IconButton onClick={handleClikckOpen}>
                  <RiArrowUpSLine color="#fff" />
                </IconButton>
              </SwipeableDrawer>
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
