import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    
  }
}))

function App() {
  const classes = useStyle()
  return (
    <Box bgcolor="background.default" className={classes.root}>
      
    </Box>
  );
}

export default App;
