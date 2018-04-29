<template>
  <div class="input-text">
    <label class="input-text__label" :for="name">{{label}}</label>
    <input class="input-text__input"
      :id="id" type="text"
      placeholder="Type city name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      >
    <p class="input-text__example">Ex:
      <span class="city">St. Petersburg</span>,
      <span class="city">Moscow</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['label', 'id', 'name', 'value'],
};
</script>

<style lang="less">
.input-text {
  display: flex;
  flex-direction: column;
  &__label {
    color: #ffffff;
    font-family: Tahoma;
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
  }
  &__input {
    height: 47px;
    border-radius: 6px;
    border: 1px solid #d7d7d7;
    background-color: #ffffff;
    padding-left: 20px;
    min-width: 380px;
    &::placeholder {
      color: #a9a9a9;
      font-family: Tahoma;
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
    }
  }
  &__example {
    color: #94c4db;
    font-family: Tahoma;
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
  }
}
.city {
  border-bottom: 1px dashed #94c4db;
}

.city:hover {
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
