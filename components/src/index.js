import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jo" 
          timeAgo="Today at 4:00PM" 
          text="Nice post!"
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="John" 
          timeAgo="Today at 2:00PM" 
          text="I like it!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Tom" 
          timeAgo="Yesterday at 3:00PM" 
          text="Awesome!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jay" 
          timeAgo="Yesterday at 2:00PM" 
          text="Great!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));