<template>
  <div class="flight-options">
    <div>
      <input-date label="Departure date:" :id="id1"></input-date>
      <roundtrip></roundtrip>
    </div>
    <div>
      <input-date label="Return date:" :id="id2"></input-date>
      <currency></currency>
    </div>
    <search-button></search-button>
  </div>
</template>

<script>
import InputDate from './InputDate.vue';
import SearchButton from './SearchButton.vue';
import Roundtrip from './Roundtrip.vue';
import Currency from './Currency.vue';

export default {
  components: {
    InputDate,
    SearchButton,
    Roundtrip,
    Currency,
  },
  data() {
    return {
      id1: 'date1',
      id2: 'date2',
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

