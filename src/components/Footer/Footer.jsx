import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import LocalCarWashIcon from "@material-ui/icons/LocalCarWash";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://goo.gl/maps/gKksKRnTyc1N5nYw6">
        Автокорпус
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function openLocationOnGoogleMaps() {
  const url = "https://goo.gl/maps/gKksKRnTyc1N5nYw6";
  window.open(url, "_blank");
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <CssBaseline />

    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body1">
          Москва, ул.Вавилова 3, ТЦ «Гагаринский», этаж -2.
        </Typography>
        <LocationOnIcon
          onClick={openLocationOnGoogleMaps}
          style={{ cursor: "pointer", margin: "10px" }}
        />

        <PhoneIcon
          style={{ cursor: "pointer", margin: "10px" }}
          onClick={() => (window.location.href = "tel:+79175155515")}
        />

        <InstagramIcon
          style={{ cursor: "pointer", margin: "10px" }}
          onClick={() =>
            (window.location.href = "https://www.instagram.com/avtokorpus/")
          }
        />

        <AccessTimeIcon
          style={{ cursor: "pointer", margin: "10px" }}
          titleAccess="9-22"
        />

        <LocalCarWashIcon
          style={{ margin: "10px" }}
          titleAccess="Автомойка"
          te="Автомойка"
        />

        <Copyright />
      </Container>
    </footer>
    // </div>
  );
}
