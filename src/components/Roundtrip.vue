<template>
  <div class="roundtrip">
      <input id="chbx" type="checkbox">
      <label for="chbx">Roundtrip</label>
  </div>
</template>

<style>
.roundtrip {
  background: url(../assets/roundtrip.png) no-repeat;
  width: 108px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Tahoma";
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;
}
#chbx {
  width: 16px;
  height: 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  background-color: #ffffff;
  margin-right: 5px;
}
</style>
