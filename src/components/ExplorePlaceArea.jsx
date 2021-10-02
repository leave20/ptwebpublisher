import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Carousel from "react-multi-carousel";
import EPCard from "./EPCards";
import "react-multi-carousel/lib/styles.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
    height: "auto",
    overflowX: "hidden",
  },
  headerText: {
    fontWeight: 700,
    fontSize: "1.8rem",
  },
  headerContainer: {},
  carousel: {
    display: "flex",
  },
  carouselContainer: {
    marginTop: "60px",
  },
  carouselButtonsGroup: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    right: "-40%",
    bottom: 570,
  },
  carouselButton: {
    color: "#fff !important",
    fontSize: "1.5em",
  },
}));

const EPArea = () => {
  const classes = useStyle();

  const OutsideBG = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <Box className={classes.carouselButtonsGroup}>
        <IconButton
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        >
          <FiArrowLeft className={classes.carouselButton} />
        </IconButton>
        <IconButton onClick={() => next()}>
          <FiArrowRight className={classes.carouselButton} />
        </IconButton>
      </Box>
    );
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.headerContainer}>
        <Typography className={classes.headerText}>
          Explore place around
        </Typography>
        <Typography className={classes.headerText}>the world</Typography>
      </Box>
      <Carousel
        className={classes.carouselContainer}
        responsive={responsive}
        swipeable
        slidesToSlide={1}
        partialVisbile
        renderButtonGroupOutside
        customButtonGroup={window.screen.width < 768 ? false : <OutsideBG />}
        arrows={false}
      >
        <EPCard />
        <EPCard />
        <EPCard />
        <EPCard />
        <EPCard />
        <EPCard />
        <EPCard />
        <EPCard />
      </Carousel>
    </Container>
  );
};

export default EPArea;
