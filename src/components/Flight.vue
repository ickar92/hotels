<template>
    <div class="flight container">
        <input-text :name="for_name1" :id="id_name1" label="Departure city:"></input-text>
        <img class="reverse" src="../assets/reverse.png" alt="">
        <input-text :name="for_name2" :id="id_name2" label="Arrival city:"></input-text>
    </div>
</template>

<script>
import InputText from './InputText.vue';

export default {
  data() {
    return {
      id_name1: 'departure',
      id_name2: 'arrival',
      for_name1: 'departure',
      for_name2: 'arrival',
    };
  },
  components: { InputText },
};
</script>

<style>
  .flight {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>

