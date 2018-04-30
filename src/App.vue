<template>
  <div id="app">
    <app-navigation :menu="menu"></app-navigation>

    <main class="container">
      <h1>Russian Train Tickets</h1>
      <flight></flight>
      <flight-options></flight-options>
    </main>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';
import Flight from './components/Flight.vue';
import FlightOptions from './components/FlightOptions.vue';

export default {
  components: { AppNavigation, Flight, FlightOptions },
  data() {
    return {
      menu: [
        { text: 'search tickets' },
        { text: 'sapsan' },
        {
          text: 'allegro',
          subMenu: [],
        },
        {
          text: 'trans-siberian',
          subMenu: [
            { text: 'Trans-siberian' },
            { text: 'Trans-siberian' },
            { text: 'Trans-siberian' },
          ],
        },
        {
          text: 'faq',
          subMenu: [{ text: 'Faq' }, { text: 'Faq' }, { text: 'Faq' }],
        },
        {
          text: 'tickets guide',
          subMenu: [
            { text: 'Group travel' },
            { text: 'Ticket types' },
            { text: 'Child policy' },
            { text: 'Change ticket request' },
            { text: 'Cancel tickets' },
          ],
        },
        {
          text: 'contact us',
          subMenu: [
            { text: 'Contact us' },
            { text: 'Contact us' },
            { text: 'Contact us' },
          ],
        },
      ],
    };
  },
};
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  background: #0085c5;
  margin-top: 100px;
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
