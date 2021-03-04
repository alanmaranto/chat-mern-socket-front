import chatTypes from "../types/chat/chat";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case chatTypes.LOAD_USERS:
      return {
        ...state,
        users: [...action.payload], // o action.payload
      };

    default:
      return state;
  }
};
