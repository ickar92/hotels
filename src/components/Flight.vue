<template>
  <div class="flight container">
    <input-text :name="for_name1"
      :id="id_name1"
      label="Departure city:"
      :value="city1"
      @input="city1 = $event"></input-text>

    <div class="reverse" @click="swapCities()"></div>

    <input-text :name="for_name2"
      :id="id_name2"
      label="Arrival city:"
      :value="city2"
      @input="city2 = $event"></input-text>
  </div>
</template>

<script>
import InputText from './InputText.vue';

export default {
  components: { InputText },
  data() {
    return {
      id_name1: 'departure',
      id_name2: 'arrival',
      for_name1: 'departure',
      for_name2: 'arrival',
      city1: '',
      city2: '',
    };
  },
  methods: {
    swapCities() {
      const temp = this.city1;
      this.city1 = this.city2;
      this.city2 = temp;
    },
  },
};
</script>

<style lang="less">
.flight {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reverse {
  width: 33px;
  height: 19px;
  background: url(../assets/reverse.png) no-repeat;
  margin-right: 10px;
  margin-left: 10px;
  transition: background-image 0.3s ease-in-out;
  &:hover {
    background: url(../assets/reverse-hover.png) no-repeat;
    cursor: pointer;
  }
}

@media screen and (max-width: 880px) {
  .flight {
    flex-direction: column;
  }
}
</style>

