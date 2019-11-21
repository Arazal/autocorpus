import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import InfoIcon from "@material-ui/icons/Info";

import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocalCarWashIcon from "@material-ui/icons/LocalCarWash";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    typography: {
      fontFamily: "Pacifico",
      fontStyle: "italic"
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        style={{
          backgroundColor: "rgba(0,0,0,0.8)"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Автокорпус
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <Divider />
        <List>
          <ListItem button key="homepage" component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>

          <ListItem button key="Услуги" component={Link} to="/services/">
            <ListItemIcon>
              <SettingsApplicationsIcon />
            </ListItemIcon>
            <ListItemText primary="Услуги" />
          </ListItem>

          <ListItem button key="about" component={Link} to="/about/">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="О Нас" />
          </ListItem>

          <ListItem button key="phone">
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="+7 917 515-55-15" />
          </ListItem>

          <ListItem
            button
            key="instagram"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/avtokorpus/")
            }
          >
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>

          <ListItem button key="wash">
            <ListItemIcon>
              <LocalCarWashIcon />
            </ListItemIcon>
            <ListItemText primary="Автомойка" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
