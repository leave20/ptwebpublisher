import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Link,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { FiMenu } from "react-icons/fi";
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
              <Drawer anchor={"top"} open={open} onClose={handleClikckOpen}>
                <Link className={classes.centerButton}>Discovered</Link>
                <Link className={classes.centerButton}>Bolg</Link>
                <Link className={classes.centerButton}>Contact</Link>
              </Drawer>
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
