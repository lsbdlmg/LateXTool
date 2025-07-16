<template>
  <button @click="saveAsSVG()">{{ textContent }}</button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import katex from 'katex'
import 'katex/dist/katex.min.css'
const store = useStore()
const props = defineProps({
  textContent: {
    type: String,
    default: '保存为图片',
  },
  format: {
    type: String,
    default: 'svg',
  },
  fileName: {
    type: String,
    default: 'formula',
  },
})
// 保存为 SVG
const saveAsSVG = () => {
  const formula = store.getters.getInputValue
  if (!formula) {
    alert('公式内容为空！')
    return
  }
  try {
    // 直接生成 SVG 字符串
    let svgString = katex.renderToString(formula, {
      displayMode: true,
      throwOnError: false,
      output: 'svg',
    })
    // 解析SVG并处理元素
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml')
    // 1. 删除katex-html元素
    const katexHtmlElements = svgDoc.querySelectorAll('.katex-html')
    katexHtmlElements.forEach((el) => el.remove())
    // 2. 为math元素添加margin-top: 20vh
    const math = svgDoc.querySelectorAll('math')
    math.forEach((el) => {
      el.setAttribute('style', 'margin-top: 20vh;')
    })
    // 重新序列化为字符串
    const serializer = new XMLSerializer()
    svgString = serializer.serializeToString(svgDoc)
    // 创建 Blob 对象
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    // 下载文件
    downloadFile(blob, `${props.fileName}.svg`)
  } catch (error) {
    console.error('生成 SVG 失败:', error)
    alert('生成 SVG 失败，请检查公式格式！')
  }
}
// 通用下载函数
const downloadFile = (blob, fileName) => {
  if (!blob || !(blob instanceof Blob)) {
    console.error('无效的 Blob 对象:', blob)
    alert('保存失败，请重试')
    return
  }
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  // 清理资源
  setTimeout(() => {
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, 100)
}
</script>

<style scoped lang="less">
button {
  margin-left: 1vw;
  padding: 1vw;
  border: 0.2vw solid rgb(205, 205, 252);
  font-weight: 700;
  font-size: 1vw;
  background: #7d88f9;
  color: #ffffff;
  border-radius: 1vw;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #0066ff;
  }

  &:active {
    background: #0052cc;
  }
}
</style>
