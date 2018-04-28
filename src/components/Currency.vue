<template>
  <div class="currency">
    <select class="select">
      <option selected value="usd">usd</option>
      <option>rub</option>
      <option>gbr</option>
      <option>eur</option>
      <option>chf</option>
    </select>
  </div>
</template>

<style>
.select {
  width: 86px;
  height: 47px;
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  background-color: #ffffff;
  background-image: url(../assets/select.png);
  background-repeat: no-repeat;
  background-position: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-position-x: 60px;
  text-transform: uppercase;
  font-family: Tahoma;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  text-transform: uppercase;
  /* Text style for "USD" */
  font-size: 16px;
}
</style>
