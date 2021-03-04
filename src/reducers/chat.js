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

    default:
      return state;
  }
};
