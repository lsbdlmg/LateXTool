import { createStore } from 'vuex'

// store/index.js
export default createStore({
  state: {
    inputValue: '',
    cursorPosition: 0, // 新增光标位置状态
  },
  mutations: {
    SET_INPUT_VALUE(state, value) {
      state.inputValue = value
    },
    SET_CURSOR_POSITION(state, position) {
      state.cursorPosition = position
    },
  },
  getters: {
    getInputValue: (state) => state.inputValue,
    getCursorPosition: (state) => state.cursorPosition,
  },
})
