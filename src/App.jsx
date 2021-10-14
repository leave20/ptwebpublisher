import { Box, makeStyles } from "@material-ui/core";
import Home from "./components/Home";
import EPArea from "./components/ExplorePlaceArea";
import WCOffer from "./components/WCanOffer";
import AboutUs from "./components/AboutUs";
import TopDestination from "./components/TopDestination";
import AwesomeBlog from "./components/AwesomeBlog";
import Footer from "./components/Footer";

const useStyle = makeStyles((theme) => ({
  root: {},
}));

function App() {
  const classes = useStyle();
  return (
    <Box bgcolor="background.default" color="#fff" className={classes.root}>
      <Home />
      <EPArea />
      <WCOffer />
      <AboutUs />
      <TopDestination />
      <AwesomeBlog />
      <Footer />
    </Box>
  );
}

export default App;
