import React from "react";

const CommentDetail = (props) => {
   return (
        
        <div className="comment">
                <a className="avatar" href="/">
                <img src={props.image} alt="Logo" />
                </a>
        <div className="content">
          <a className="author" href="/">{props.author}</a>
          <div className="metadata">
            <span className="date">Today at {props.timeblog}</span>
          </div>
          <div className="text">
            How artistic!
          </div>
          <div className="actions">
            <a className="reply" href="/">Reply</a>
          </div>
        </div>
      </div>
   );
}

export default CommentDetail;