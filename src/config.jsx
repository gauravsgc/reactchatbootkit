import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './components/DogPicture';
import LearningOptions from "./components/LearningOptions";
import LinkList from "./components/LinkList";
import MyAvatar from './components/MyAvatar';
const botName = 'Vidal Health';
// const config = {
  
//   initialMessages: [createChatBotMessage(`Hi! I'm  ${botName} `)],
//   botName: 'VIVA',
  
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: '#376B7E',
//     },
//     chatButton: {
//       backgroundColor: '#5ccc9d',
//     },
   
//   },
//   customComponents: {
//     botAvatar: (props) => <MyAvatar {...props} />,
//   },
// };

// export default config;



const config = {
  initialMessages: [ createChatBotMessage("Hi, I'm here to help. What do you want to 		learn?", {
    widget: "learningOptions",
  }),
],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
   
  },
  customComponents: {
    botAvatar: (props) => <MyAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "learningOptions",
     widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
      
    },
    {
      widgetName: "DataVisualizationLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Datavisualization",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Datavisualization",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Datavisualization Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};
export default config;