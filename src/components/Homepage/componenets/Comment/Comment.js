import "./Comment.css";
import React from "react";
import Collapse from "@material-ui/core/Collapse";
import retrexLogo from "../../../../Assets/retrex_logo.png";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const Comment = () => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 comments-section">
          <br />
          <div>
            <div className="commentsCount">
              <span>934</span>
            </div>
            <div className="commentsTitle">
              <span>COMMENTS</span>
            </div>
            <div className="hamIcon">
              <MenuOutlinedIcon onClick={handleClick} />
            </div>
          </div>
          <hr />
          <br />
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div id="comments-wrapper">
              <div className="comment clearfix">
                <img src={retrexLogo} alt="" className="profile_pic" />
                <div className="comment-details">
                  <span className="comment-name">RETREX IO</span>
                  <span className="comment-date">Apr 24, 2018</span>
                  <p>
                    This is the first reply to this post on this website.This is
                    the first reply to this post on this website. This is the
                    first reply to this post on this website. This is the first
                    reply to this post on this website.
                  </p>
                  <div className="badgeIcon">
                    {" "}
                    <StarsOutlinedIcon color="primary" />
                  </div>
                  <div className="likeDislike">
                    <span>
                      <ThumbUpIcon style={{ fontSize: "15px" }} />
                    </span>
                    <span className="vertical-line"></span>
                    <span>
                      <ThumbDownIcon style={{ fontSize: "15px" }} />
                    </span>
                  </div>
                  <div className="replyButton">
                    <span style={{ fontSize: "11px" }}>REPLY</span>
                  </div>
                </div>
                {/* Reply */}
                {/* <div>
                  <div className="comment reply clearfix">
                    <img src={retrexLogo} alt="" className="profile_pic" />
                    <div className="comment-details">
                      <span className="comment-name">Awa</span>
                      <span className="comment-date">Apr 24, 2018</span>
                      <p>Hey, why are you the first to comment on this post?</p>
                      <a className="reply-btn" href="#">
                        reply
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <br />
            <div id="comments-wrapper">
              <div className="comment clearfix">
                <img src={retrexLogo} alt="" className="profile_pic" />
                <div className="comment-details">
                  <span className="comment-name">RETREX IO</span>
                  <span className="comment-date">Apr 24, 2018</span>
                  <p>
                    This is the first reply to this post on this website.This is
                    the first reply to this post on this website.This is the
                    first reply to this post on this website.This is the first
                    reply to this post on this website.
                  </p>
                  <div className="badgeIcon">
                    {" "}
                    <StarsOutlinedIcon color="primary" />
                  </div>
                  <div className="likeDislike">
                    <span>
                      <ThumbUpIcon style={{ fontSize: "15px" }} />
                    </span>
                    <span className="vertical-line"></span>
                    <span>
                      <ThumbDownIcon style={{ fontSize: "15px" }} />
                    </span>
                  </div>
                  <div className="replyButton">
                    <span style={{ fontSize: "11px" }}>REPLY</span>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
export default Comment;
