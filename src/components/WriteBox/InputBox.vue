<template>
  <div class="inputBox">
    <p>输入区域</p>
    <textarea
      v-model="inputValue"
      placeholder="请输入你的LateX表达式"
      @focus="updateCursorPosition"
      @input="updateCursorPosition"
      @selectionchange="updateCursorPosition"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const textareaRef = ref(null)

// 双向绑定的计算属性
const inputValue = computed({
  get() {
    return store.getters.getInputValue
  },
  set(value) {
    store.commit('SET_INPUT_VALUE', value)
  },
})

// 更新光标位置
const updateCursorPosition = () => {
  if (textareaRef.value) {
    const position = textareaRef.value.selectionStart
    store.commit('SET_CURSOR_POSITION', position)
  }
}

onMounted(() => {
  textareaRef.value = document.querySelector('.inputBox textarea')
})
</script>

<style lang="less">
.inputBox {
  width: 100%;
  height: 35vh;
  p {
    font-weight: 700;
  }
  textarea {
    font-weight: 700;
    font-size: 1.5vw;
    padding: 0 0.5vw;
    border: 0.1vw solid #ccc;
    width: 98.6%;
    height: 80%;
    outline: none;
  }
}
</style>
