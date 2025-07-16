<template>
  <div class="LettersBox">
    <p>{{ title }}</p>
    <div class="SmallLettersBox">
      <FormulaRenderer
        v-for="(letter, name) in letters"
        :key="`${caseValue}-${name}`"
        :formula="letter"
      />
    </div>
  </div>
</template>

<script>
import FormulaRenderer from '@/ui/FormulaRenderer.vue'
export default {
  components: {
    FormulaRenderer,
  },
  props: ['letters', 'title', 'case'],
  data() {
    return {}
  },
  computed: {
    caseValue() {
      return this.case
    },
  },
}
</script>

<style lang="less">
.LettersBox {
  padding: 0 0 2vh;
  margin-bottom: -0.5vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  // border: 0.2vw solid black;
  p {
    width: fit-content;
    font-weight: 700;

    margin: 0 0 0.5vh;
    padding: 0.5vw;
  }
  .SmallLettersBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    gap: 0.8vw;
  }
}
</style>
