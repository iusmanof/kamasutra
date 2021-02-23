const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_TEXTT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  names: [
    { id: 1, name: "Ihar" },
    { id: 2, name: "Harry" },
    { id: 3, name: "Belatrissa" },
  ],

  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I'm fine. And you?" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 4, message: body }],
      };

    default:
      return state;
  }
};

export let sendMessageCreator = (body) => {
  return { type: SEND_MESSAGE, body: body };
};

export let updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
