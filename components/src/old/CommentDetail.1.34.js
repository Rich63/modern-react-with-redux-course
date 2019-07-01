import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {  // props are got from App.js lines 8-10 <CommentDetail author="...."
// on line 13 we add the propperty given to this component JSX
return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={ faker.image.avatar() } />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
      </div>
      <div className="text">Nice Blog Post!</div>
    </div>
  );
}

export default CommentDetail;
