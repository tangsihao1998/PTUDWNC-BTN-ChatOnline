export const getCurrentUser = (state) => state.auth.currentUser;
export const getCurrentMessagesQuery = (state) => state.messages.queryResult.data;
export const getCurrentRoomsQuery = (state) => state.rooms.queryResult.data;
export const getRoomTypeFilter = (state) => state.chat.roomTypeFilter;
