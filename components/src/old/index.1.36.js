import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from '../CommentDetail';

const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 4:45PM" 
        content="Nice Blog Post!" 
        avatar={ faker.image.avatar() }
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Today at 2:00AM" 
        content="I like it!" 
        avatar={ faker.image.avatar() }
      />
      <CommentDetail 
        author="Sam" 
        timeAgo="Yesterday at 5:00PM" 
        content="What!" 
        avatar={ faker.image.avatar() }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));