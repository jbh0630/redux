import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Jo" />
      <CommentDetail author="John" />
      <CommentDetail author="Tom" />
      <CommentDetail author="Jay" />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));