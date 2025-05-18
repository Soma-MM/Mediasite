import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputValue: '',
}

export const SearchSlice = createSlice({
  name: 'searchFilim',
  initialState,
  reducers: {
   
 ValueInputSearch: (state, action) => {
      state.inputValue = action.payload
    },

    
  },



})


export const {ValueInputSearch } = SearchSlice.actions

export default SearchSlice.reducer