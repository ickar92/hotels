<template>
  <div class="flight-options">
      <input-date label="Departure date:" :id="id1"></input-date>
      <roundtrip></roundtrip>
      <input-date label="Return date:" :id="id2"></input-date>
      <search-button></search-button>
  </div>
</template>

<script>
import InputDate from './InputDate.vue';
import SearchButton from './SearchButton.vue';
import Roundtrip from './Roundtrip.vue';

export default {
  components: { InputDate, SearchButton, Roundtrip },
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

</style>

