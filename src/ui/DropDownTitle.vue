<template>
  <div class="DropDownTitle">
    <div class="DropDownPng">
      <img src="../assets/DropDown.png" alt="下拉" />
    </div>
    <span>{{ DropDownTitle }}</span>
  </div>
</template>

<script>
export default {
  props: ['DropDownTitle'],
  components: {},
}
</script>

<style lang="less">
.DropDownTitle {
  width: 100%;
  --DropDownTitle-height: 6vh;
  height: var(--DropDownTitle-height);
  line-height: var(--DropDownTitle-height);
  display: flex;
  gap: 1vw;
  font-size: 1vw;
  font-weight: 700;
  transition: background 0.3s ease;
  span {
    text-align: center;
  }
  img {
    margin-left: 0.2vw;
    width: 1vw;
    transform: rotate(-90deg);
    transition: transform 0.3s ease;
  }
}
</style>
