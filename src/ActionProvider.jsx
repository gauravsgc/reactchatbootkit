// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const elsemsg = () => {
    const botMessage = createChatBotMessage('this is not in option.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  

 const handleJavascriptList = () => {
    const botMessage = createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    
  };

  const handleDatavisualizationList = () => {
    const botMessage = createChatBotMessage(
      "Fantastic, I've got the following resources for you on Data visualization:",
      {
        widget: "DataVisualizationLinks",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    
  };
  // const handleHello1 = () => {
  //   const botMessage = createChatBotMessage('hi m itni berukhi kyun');

  //   setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  // };
  
  
  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            // handleHello1,
            handleDog,
            elsemsg,
            handleJavascriptList,
            handleDatavisualizationList
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;