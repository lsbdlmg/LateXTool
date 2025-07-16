<template>
  <div id="LateXTool">
    <div class="ShortCutToolBox">
      <ShortCutTool
        v-for="item in ShortCutTools"
        :key="item.id"
        :LettersTitleCase="item.TitleCaseLetters"
        :DropDownTitle="item.DropDownTitle"
        :IsLeft="item.IsLeft"
      ></ShortCutTool>
    </div>
    <InputBox></InputBox>
    <OutputBox></OutputBox>
    <div class="outputButtons">
      <ButtonOne textContent="保存为 SVG" format="svg" fileName="latex_formula"></ButtonOne>
    </div>
  </div>
</template>

<script>
import ShortCutTool from '@/components/ShortCutTools/ShortCutTool.vue'
import InputBox from '@/components/WriteBox/InputBox.vue'
import OutputBox from '@/components/WriteBox/OutputBox.vue'
import { Symbols } from '@/data/Symbols'
import ButtonOne from '@/ui/ButtonOne.vue'
export default {
  components: {
    InputBox,
    OutputBox,
    ShortCutTool,
    ButtonOne,
  },
  data() {
    return {
      ShortCutTools: Symbols,
    }
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
button {
  cursor: pointer;
}
#LateXTool {
  margin: 2vh auto 0;
  width: 80vw;
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  background: #ffffff;
  .ShortCutToolBox {
    display: flex;
    width: 100%;
  }
  .outputButtons {
    margin-left: auto;
    margin-right: 0vw;
    margin-top: 5vh;
  }
}
</style>
