import { Box, makeStyles } from "@material-ui/core";
import Home from "./components/Home";

const useStyle = makeStyles(theme => ({
  root: {
    
  }
}))

function App() {
  const classes = useStyle()
  return (
    <Box bgcolor="background.default" color="#fff" className={classes.root}>
      <Home />
    </Box>
  );
}

export default App;
