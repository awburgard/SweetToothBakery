import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    margin: "0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    color: "var(--lightGrey)",
  },
  appBar: {
    margin: "0",
  },
  toolBar: {
    padding: "0px 30px",
    margin: "0",
    maxWidth: 1280,
    display: "flex",
    justifyContent: "space-between",
  },
  headerOptions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navigation = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const scrollInto = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView(true);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "#home",
    },
    {
      menuTitle: "About",
      pageURL: "#about",
    },
    {
      menuTitle: "Contact",
      pageURL: "#contact",
    },
  ];

  return (
    <div className={classes.root} style={{ padding: 0, margin: 0 }}>
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} style={{ margin: 0 }}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h4" className={classes.title}>
              Sweet Tooth Bakery
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                  onClick={handleMenu}
                  style={{ backgroundColor: "none" }}
                >
                  <MenuIcon size="small" style={{ color: "white" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map((menuItem) => {
                    const { menuTitle, pageURL } = menuItem;
                    return (
                      <MenuItem key={menuTitle}>
                        <Link href={pageURL}>{menuTitle}</Link>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              <List className={classes.headerOptions} component="nav">
                <ListItem
                  alignItems="flex-start"
                  button
                  onClick={() => scrollInto("home")}
                >
                  Home
                </ListItem>
                <ListItem
                  button
                  alignItems="flex-start"
                  onClick={() => scrollInto("about")}
                >
                  About
                </ListItem>
                <ListItem
                  alignItems="flex-start"
                  button
                  onClick={() => scrollInto("contact")}
                >
                  Contact
                </ListItem>
              </List>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Navigation;
