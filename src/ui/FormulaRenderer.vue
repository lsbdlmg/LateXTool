<!-- FormulaRenderer.vue -->
<template>
  <div class="formula" v-html="renderedHtml" @click="insertFormula"></div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const store = useStore()

const props = defineProps({
  formula: {
    type: String,
    required: true,
  },
})

const renderedHtml = computed(() => {
  try {
    return katex.renderToString(props.formula, {
      displayMode: true,
    })
  } catch (e) {
    console.error('Fail to rander the formula', e)
    return `<span class="error">${props.formula}</span>`
  }
})

const insertFormula = () => {
  const inputValue = store.getters.getInputValue
  const cursorPosition = store.getters.getCursorPosition

  const before = inputValue.substring(0, cursorPosition)
  const after = inputValue.substring(cursorPosition)

  store.commit('SET_INPUT_VALUE', before + props.formula + after)

  // 触发事件通知文本框更新光标位置
  setTimeout(() => {
    const newCursorPos = cursorPosition + props.formula.length
    document.querySelector('textarea')?.focus()
    document.querySelector('textarea')?.setSelectionRange(newCursorPos, newCursorPos)
  }, 0)
}
</script>

<style scoped lang="less">
.formula {
  padding: 0 1.2vw;
  height: fit-content;
  border: 0.2vw solid black;
  border-radius: 0.5vw;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgb(212, 212, 212);
  }
}
.formula-error {
  color: red;
  font-style: italic;
}
</style>
