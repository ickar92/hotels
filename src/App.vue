<template>
  <div id="app">
    <navigation></navigation>
    <main class="container">
      <h1>Russian Train Tickets</h1>
      <flight></flight>
      <flight-options></flight-options>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Flight from './components/Flight.vue';
import FlightOptions from './components/FlightOptions.vue';

export default {
  components: { Navigation, Flight, FlightOptions },
};
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  background: #0085c5;
}
.container {
  max-width: 856px;
  margin: 0 auto;
}
h1 {
  color: #ffffff;
  font-family: Tahoma;
  font-size: 24px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  margin-bottom: 50px;
}
main {
  padding-top: 50px;
  padding-bottom: 100px;
}
</style>
