<template>
  <div class="flight-options">
    <div>
      <input-departure-date></input-departure-date>
      <roundtrip v-bind:checked="checked" v-on:change="checked = $event"></roundtrip>
    </div>
    <div>
      <input-return-date :dis="!checked"></input-return-date>
      <currency></currency>
    </div>
    <search-button></search-button>
  </div>
</template>

<script>
import InputDepartureDate from './InputDepartureDate.vue';
import InputReturnDate from './InputReturnDate.vue';
import SearchButton from './SearchButton.vue';
import Roundtrip from './Roundtrip.vue';
import Currency from './Currency.vue';

export default {
  components: {
    InputDepartureDate,
    InputReturnDate,
    SearchButton,
    Roundtrip,
    Currency,
  },
  data() {
    return {
      id1: 'date1',
      id2: 'date2',
      checked: false,
    };
  },
};
</script>

<style>
.flight-options {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.flight-options > div {
  display: flex;
  align-items: flex-end;
}
@media screen and (max-width: 880px) {
  .flight-options {
    flex-direction: column;
    align-items: center;
  }
  .flight-options > div {
    width: 390px;
    justify-content: space-between;
  }
  search-button {
    margin-top: 20px;
  }
}
</style>

