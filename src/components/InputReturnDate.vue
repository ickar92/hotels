<template>
  <div class="input-date">
    <label class="input-date__label" for="date2">Return date:</label>
    <input class="input-date__input" id="date2" type="date" :disabled="dis">
  </div>
</template>

<script>
export default {
  props: ['dis'],
};
</script>


<style lang="less" scoped>
.input-date__input {
  background-color: #1395d3;
  border: 1px solid #0076ad;
  &::-webkit-calendar-picker-indicator {
    background: url(../assets/calendar2.png) no-repeat;
  }
}
</style>

