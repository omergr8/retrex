import React from "react";
import "./Homepage.css";
import Navbar from "../Shared/Navbar";
import video1 from "../../Assets/video.mp4";
import retrex_logo from "../../Assets/retrex_logo.png";
import thumbnail from "../../Assets/thumbnail.jpeg";
import Tabs from "./componenets/MaterialTabs";
import AntdComment from "./componenets/AntdComment";
import Container from '@material-ui/core/Container';

import { Grid, makeStyles, fade, InputBase, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import Badge from './componenets/Badge/Badge'
import Merchant from './componenets/Merchant/Merchant'
import Comment from './componenets/Comment/Comment'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
    width: "90%",
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "primary",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    
    "&:hover": {
      backgroundColor: 'white'
    },
     backgroundColor:'white',
    margin: "auto",
    width: "60%",
    
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(3),
    //   width: "auto",
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:'black'
  },
  inputRoot: {
    color: "black",
     
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "200px",
   
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
      <div className="homepage-body">
        <div className="main-css-grid-row">
          {/* Col-1 */}
            <div className="col-1">
         
              <div style={{ padding: "10px 40px" }}>

                <div className={classes.search}>
                  
                <div className={classes.searchIcon}>
                  <SearchIcon />
                  </div>
             
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>

              <br />

              <video src={video1} controls width="100%"></video>

              <br />
              <br />

              <div className="video-title-container">
                <div style={{fontSize:'11px',fontWeight:'500'}}>
                  <h3>
                    WHAT RETREX BRINGS TO YOU? - COME JOIN US ON OUR JOURNEY
                  </h3>
                  <p>102,987 VIEWS - JULY 20, 2021</p>
                </div>
                <div>
                  <BorderLinearProgress variant="determinate" value={70} />
                </div>
                <div className="thumbs-container">
                  <div>
                    <ThumbUpIcon style={{ fontSize: "16px" }} />
                    <p style={{ fontSize: "12px" }}>10k</p>
                    </div>
                  
                  {/* &nbsp; */}
                  {/* <span style={{ fontSize: "20px" }}>&#124;</span>{" "} */}
                  <div>
                    <ThumbDownIcon style={{ fontSize: "16px" }}/>
                    <p style={{ fontSize: "12px" }}>2k</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Button style={{ fontSize: "11px" }} variant="contained" color="primary">
                    +1 R CROWN
                  </Button>
                  </div>
                  
                </div>
                <hr />
                <Grid container spacing={3}>
                  
                    <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
       <Badge/>
        </Grid>
        <Grid item xl={7} lg={7} md={12} sm={12} xs={12}>
            <Merchant/>
        </Grid>
                 </Grid>
           
            <Comment/>

            </div>

            {/* <div>
              <AntdComment />
            </div> */}
          </div>
          {/* Col-2 */}
          <div item xs={4} className="col-2">
            <div className="user-id-card">
              <div className="user-id-card-header">
                <div style={{ width: "15%", float: "left" }}>
                  <img src={retrex_logo} width="35px" height="35px" alt="" />
                </div>
                <div style={{ width: "85%", float: "right" }}>
                  <span>User ID</span>
                  <br />
                  <span>Status - Online</span> &nbsp;
                  <span class="dot"></span>
                </div>
              </div>
              <div className="user-id-card-body">
                <hr />
                <Tabs />
              </div>
            </div>

            <br />

            <div className="insta-exchange-card">
              <div className="insta-exchange-card-header">
                <h3>INSTA - EXCHANGE</h3>
              </div>
              <div className="insta-exchange-card-body">
                <span className="insta-exchange-card-body-span">REXT</span>
                &nbsp; &nbsp; > &nbsp; &nbsp;
                <span className="insta-exchange-card-body-span">BTC</span>
                <br />
                <br />
                <input type="text" className="btc-address-text-field " />
                <br />
                <br />
                <Button variant="contained" color="primary">
                  Exchange
                </Button>
              </div>
            </div>

            <br />

            <div>
              <h2>VIEW RATE RECOMENDATIONS</h2>
              <hr />
              <br />
              <img src={thumbnail} width="280px" height="160px" alt="" />
              <br />
              <br />
              <img src={thumbnail} width="280px" height="160px" alt="" />
              <br />
              <br />
              <img src={thumbnail} width="280px" height="160px" alt="" />
              <br />
              <br />
              <img src={thumbnail} width="280px" height="160px" alt="" />
            </div>
          </div>
        </div>
        </div>
        </Container>
    </div>
      
  );
};

export default Homepage;
