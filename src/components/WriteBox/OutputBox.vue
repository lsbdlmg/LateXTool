<template>
  <div class="outputBox">
    <p>渲染结果</p>
    <div ref="outputRef" class="formula-output"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from 'vuex'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const store = useStore()
const outputRef = ref(null)
const inputValue = computed(() => store.getters.getInputValue)

onMounted(() => {
  renderFormula()
})

watch(inputValue, () => {
  renderFormula()
})

const renderFormula = () => {
  if (!outputRef.value) return

  outputRef.value.innerHTML = ''

  try {
    katex.render(inputValue.value, outputRef.value, {
      throwOnError: false,
      displayMode: true,
    })
  } catch (error) {
    outputRef.value.innerHTML = `<div class="render-error">${error.toString()}</div>`
  }
}
</script>

<style lang="less">
.outputBox {
  width: 100%;
  height: 40vh;
  p {
    font-weight: 700;
  }
  .formula-output {
    font-size: 1.5vw;
    padding: 1vw;
    border: 0.1vw solid #ccc;
    width: 97.3%;
    height: 80%;
    overflow-x: auto;
  }

  .render-error {
    color: red;
    font-style: italic;
    margin: 0 auto;
  }
}
</style>
