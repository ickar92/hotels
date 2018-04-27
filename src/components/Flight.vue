<template>
    <div class="flight">
        <input-group :forName="for_name1" :id="id_name1" label="Departure city:"></input-group>
        <img class="reverse" src="img/reverse.png" alt="">
        <input-group :forName="for_name2" :id="id_name2" label="Arrival city:"></input-group>
    </div>
</template>

<script>
import InputGroup from './InputGroup.vue';

export default {
  data() {
    return {
      id_name1: 'departure',
      id_name2: 'arrival',
      for_name1: 'departure',
      for_name2: 'arrival',
    };
  },
  components: { InputGroup },
};
</script>

