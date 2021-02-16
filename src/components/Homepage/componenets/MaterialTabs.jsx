import React from "react";
import "./MaterialTabs.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "primary",
  },
}))(LinearProgress);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    // width: "100%",
  },
  tab: {
    minWidth: "25%", // a number of your choice
    width: "25%", // a number of your choice
    padding: "0px",
    fontSize: "11px",
  },
}));

export default function MaterialTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="PROFILE" className={classes.tab} {...a11yProps(0)} />
          <Tab label="WALLET" className={classes.tab} {...a11yProps(1)} />
          <Tab label="STAKING POOL" className={classes.tab} {...a11yProps(2)} />
          <Tab label="OPTIONS" className={classes.tab} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="item-two-container">
            <p><small style={{fontSize:'10px'}}>WATCH TIME</small></p>
            <h1>12:45s</h1>
            <BorderLinearProgress variant="determinate" value={70} />
            <p className="generating-rext">Generating REXT ...</p>
            <br />
            <h2>800 REXT</h2>
            <hr />
            <p className="generating-rext">REXT WALLET ADDRESS</p>
            <input type="text" className="wallet-address-text-field" />
            <br />
            <br />
            <Button variant="contained" color="primary">
              WITHDRAW
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="primary">
              STACK
            </Button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
