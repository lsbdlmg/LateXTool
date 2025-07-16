<template>
  <div class="ShortCutTool" @mouseenter="showLetters = true" @mouseleave="showLetters = false">
    <DropDownTitle :DropDownTitle="DropDownTitle"></DropDownTitle>
    <div class="AllLettersBox" :style="IsLeft ? 'left:0' : 'right: 0'" v-show="showLetters">
      <LettersBox
        v-for="item in LettersTitleCase"
        :key="item.case"
        :letters="item.letters"
        :title="item.title"
        :case="item.case"
      ></LettersBox>
    </div>
  </div>
</template>

<script>
import LettersBox from '@/components/ShortCutTools/LettersBox.vue'
import DropDownTitle from '@/ui/DropDownTitle.vue'
export default {
  components: {
    LettersBox,
    DropDownTitle,
  },
  props: ['LettersTitleCase', 'DropDownTitle', 'IsLeft'],
  data() {
    return {
      showLetters: false,
    }
  },
}
</script>

<style lang="less">
.ShortCutTool {
  width: 12.5%;
  height: 0%;
  margin: 1vw 0 0 1vw;
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  position: relative;
  .AllLettersBox {
    z-index: 10000;
    position: absolute;
    width: 425%;
    top: 6vh;
    border: 0.1vw solid gray;
    padding: 0 1vw;
    border-end-end-radius: 1vw;
    border-end-start-radius: 1vw;
    background: #fff;
  }
  &:hover {
    .DropDownTitle {
      background: #e1e1e1;
      .DropDownPng img {
        transform: rotate(0deg);
      }
    }
  }
}
</style>
