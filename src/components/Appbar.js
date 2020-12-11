import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link, withRouter } from "react-router-dom";

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
    height: "100%",
    margin: "0",
  },
  toolBar: {
    width: "100%",
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
  },
}));

const Navigation = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact",
    },
    {
      menuTitle: "About",
      pageURL: "/about",
    },
  ];

  return (
    <div className={classes.root} style={{ padding: 0, margin: 0 }}>
      <AppBar
        position="static"
        className={classes.appBar}
        style={{ margin: 0 }}
      >
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            Sweet Tooth Bakery
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
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
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
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
                onClick={() => handleButtonClick("/")}
              >
                Home
              </ListItem>
              <ListItem
                alignItems="flex-start"
                button
                onClick={() => handleButtonClick("/contact")}
              >
                Contact
              </ListItem>
              <ListItem
                button
                alignItems="flex-start"
                onClick={() => handleButtonClick("/about")}
              >
                About
              </ListItem>
            </List>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navigation);
