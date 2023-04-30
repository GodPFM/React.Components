import * as toolkitRaw from '@reduxjs/toolkit';
// @ts-ignore
const { createSlice } = ((toolkitRaw as never).default ?? toolkitRaw) as typeof toolkitRaw;

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    changeValue(state, action) {
      state.value = action.payload;
    },
  },
});
export default searchSlice.reducer;
