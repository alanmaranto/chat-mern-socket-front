import chatTypes from "../types/chat/chat";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case chatTypes.LOAD_USERS:
      return {
        ...state,
        users: [...action.payload], // o action.payload
      };

    case chatTypes.ACTIVE_CHAT:
      if (state.activeChat === action.payload) return state;

      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };

    case chatTypes.NEW_MESSAGE:
      if (
        state.activeChat === action.payload.from ||
        state.activeChat === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }

    case chatTypes.LOAD_MESSAGES:
      return {
        ...state,
        messages: [...action.payload],
      };

    case chatTypes.LOGOUT_USER:
      return {
        uid: "",
        activeChat: null,
        users: [],
        messages: [],
      };

    default:
      return state;
  }
};
