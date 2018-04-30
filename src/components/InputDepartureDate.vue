<template>
  <div class="input-date">
    <label class="input-date__label" for="date1">Departure date:</label>
    <input class="input-date__input" id="date1" type="date">
  </div>
</template>

<style lang="less">
.input-date {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  &__label {
    color: #ffffff;
    font-family: Tahoma;
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
  }
  &__input {
    min-width: 167px;
    height: 47px;
    border-radius: 6px;
    border: 1px solid #d7d7d7;
    background-color: #ffffff;
    padding-left: 20px;
    &::-webkit-inner-spin-button {
      display: none;
    }
    &::-webkit-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      display: block;
      width: 26px;
      height: 26px;
      border-width: thin;
    }
    &::-webkit-calendar-picker-indicator {
      background: url(../assets/calendar.png) no-repeat;
    }
  }
}
</style>

