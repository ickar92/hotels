<template>
  <div class="navigation">
    <div class="container nav">
      <ul class="menu">
        <li class="menu__item" v-for="(item, idx) in menu" :key="idx" @click="show=!show">
          {{ item.text }}
          <ul class="menu__nested" v-if="show">
            <menu-item v-for="(sub, idx) in item.subMenu" :key="idx" v-bind:sub="sub" ></menu-item>
          </ul>
        </li>
      </ul>

      <div class="sign">
        <a href="#">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  data() {
    return {
      menu: [
        { text: 'search tickets' },
        { text: 'sapsan' },
        { text: 'allegro' },
        {
          text: 'trans-siberian',
          subMenu: [
            { text: 'Linting' },
            { text: 'Bundling' },
            { text: 'Testing' },
          ],
        },
        {
          text: 'faq',
          subMenu: [
            { text: 'Linting' },
            { text: 'Bundling' },
            { text: 'Testing' },
          ],
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
            { text: 'Linting' },
            { text: 'Bundling' },
            { text: 'Testing' },
          ],
        },
      ],
      show: false,
    };
  },
  components: { MenuItem },
};
</script>

<style lang="less">
.navigation {
  background: #54add8;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.menu {
  display: flex;
  flex: 7;
  justify-content: space-around;
  &__item {
    color: #ffffff;
    font-family: Tahoma;
    font-size: 13px;
    font-weight: 700;
    line-height: 27px;
    text-transform: uppercase;
    cursor: pointer;
    &:after {
      content: url("../assets/sub.png");
    }
  }
}
ul {
  list-style: none;
  padding: 0;
}
.sign {
  display: flex;
  flex: 1;
  justify-content: center;
}
</style>

