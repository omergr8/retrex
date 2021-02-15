import classes from "./Badge.module.css";
import React, { useState, useCallback } from "react";

import retrex_logo from "../../../../Assets/retrex_logo.png";
import {
  Grid,
  makeStyles,
  fade,
  InputBase,
  Button,
  Icon,
} from "@material-ui/core";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import ReadMoreReact from "read-more-react";
const Badge = (props) => {
  const [readMore, setReadMore] = useState(false);
  const [scrollPos, setScrollPos] = useState();
  const readMoreFunct = (e) => {
    setReadMore(!readMore);
    e.preventDefault();
  };
  const extraContent = (
    <div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.libero commodi officia aliquam! Maxime.libero commodi officia
        aliquam! Maxime.
      </p>
    </div>
  );
  const linkName = readMore ? "SHOW LESS < " : "SHOW MORE > ";
  return (
    <div>
      <div className={classes.badge}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <div className={classes.wrapper}>
              <div style={{ width: "25%" }}>
                <img
                  className={classes.img}
                  src={retrex_logo}
                  width="45px"
                  height="45px"
                  alt=""
                />
              </div>
              <div className={classes.span}>
                <span> RETREX IO</span>
                <div>
                  <span>25,020 -R CROWNS</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              BADGES
            </h2>
            <Grid
              container
              style={{
                textAlign: "center",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              spacing={0}
            >
              <Grid item xs={4}>
                {" "}
                <StarsOutlinedIcon color="primary" />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <StarsOutlinedIcon color="primary" />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <StarsOutlinedIcon color="primary" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <hr />
      <h3 style={{ fontSize: "14px" }}>**A CROWN MY CHANNEL FOR MORE**</h3>
      <p style={{ fontSize: "10px" }}>
        {extraContent}
        {readMore && extraContent}
        <a href="!#" onClick={readMoreFunct}>
          <h2 style={{ fontSize: "13px", fontWeight: "400", color: "#D3D3D3	" }}>
            {linkName}
          </h2>
        </a>
      </p>
      <hr />
    </div>
  );
};
export default Badge;
