import { createSlice } from '@reduxjs/toolkit';

const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

const cmsSlice = createSlice({
  name: 'cms',
  initialState: [],
  reducers: {
    create: (state, action) => {
      const { payload } = action;

      state.push({
        id: uniqueId(),
        description: payload,
        isComplete: false,
      });
    },
    edit: (state, action) => {
      const { id, description } = action.payload;
      const bookToEdit = state.find((book) => book.id === id);

      if (bookToEdit) {
        bookToEdit.description = description;
      }
    },
  },
});

export default cmsSlice;
