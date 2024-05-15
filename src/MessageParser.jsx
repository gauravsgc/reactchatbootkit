// in MessageParser.jsx
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }
    if(message!='hello'&& message!='dog'){
      actions.elsemsg();
    }
    if (message.includes("javascript")) {
      actions.handleJavascriptList();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;