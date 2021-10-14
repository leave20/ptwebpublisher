import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 470,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    [theme.breakpoints.down(769)]: {
      width: 270,
      height: 420,
    },
  },
  cardContent: {
    color: "#fff",
  },
  country: {
    fontSize: "2em",
    fontWeight: 700,
  },
}));

const EPCard = ({ city, country, img }) => {
  const classes = useStyle();
  return (
    <Card
      className={classes.root}
      style={{
        backgroundImage: img
          ? `url(${img})`
          : `url(${"/img/home-background-image.jpg"})`,
      }}
    >
      <CardContent className={classes.cardContent}>
        <Typography className={classes.city}>
          {city ? city : "Río de Janeiro"}
        </Typography>
        <Typography className={classes.country}>
          {country ? country : "Brazil"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EPCard;
