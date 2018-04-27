<template>
  <div class="navigation">
    <div class="container nav">
      <ul class="menu">
        <li v-for="(item, idx) in menu" :key="idx">{{item}}</li>
      </ul>
      <div class="sign">
        <a href="#">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        'search tickets',
        'sapsan',
        'allegro',
        'trans-siberian',
        'faq',
        'tickets guide',
        'contact us',
      ],
    };
  },
};
</script>

<style>
.navigation {
  background: #54add8;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.menu {
  display: flex;
  list-style: none;
  flex: 7;
  justify-content: space-around;
}
.sign {
  display: flex;
  flex: 1;
  justify-content: center;
}
</style>

