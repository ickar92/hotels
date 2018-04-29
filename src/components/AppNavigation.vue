<template>
  <div class="navigation">
    <div class="container nav">
      <ul class="menu" v-show="isActive" v-click-outside="onOutsideMenuClick">
        <li v-for="(item, idx) of menu" :key="idx"
          class="menu__item"
          :class="{
            'menu__item--with-sub': menuItemHasSub(item),
            'menu__item--active': menuItemIsActive(idx)
          }"
          @click="onMenuItemClick(idx)">

          {{ item.text }}

          <ul class="menu__nested" v-if="menuItemIsActive(idx)">
            <li v-for="(sub, idx) of item.subMenu" :key="idx">{{ sub.text }}</li>
          </ul>
        </li>
      </ul>
      <a class="nav__btn" href="#" @click="onMenuBtnClick()">
        <svg width="30" height="30">
          <path d="M0,5 30,5" stroke="#fff" stroke-width="5"/>
          <path d="M0,14 30,14" stroke="#fff" stroke-width="5"/>
          <path d="M0,23 30,23" stroke="#fff" stroke-width="5"/>
        </svg>
      </a>
      <div class="sign">
        <div class="sign__img"></div>
        <a href="#">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from '@/directives/ClickOutside';

export default {
  directives: { ClickOutside },
  props: ['menu'],
  data() {
    return {
      openedMenuItemIdx: null,
      isActive: false,
    };
  },
  methods: {
    menuItemIsActive(idx) {
      return idx === this.openedMenuItemIdx;
    },
    onOutsideMenuClick() {
      this.openedMenuItemIdx = null;
    },
    onMenuItemClick(idx) {
      if (idx === this.openedMenuItemIdx) {
        this.openedMenuItemIdx = null;
        return;
      }
      this.openedMenuItemIdx = idx;
    },
    menuItemHasSub(menuItem) {
      return menuItem.subMenu && menuItem.subMenu.length;
    },
    onMenuBtnClick() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
};
</script>

<style lang="less">
.navigation {
  background: #54add8;
  padding: 5px;
}
.nav {
  display: flex;
  justify-content: space-between;
  position: relative;

  &__btn {
    display: none;
  }
}

.menu {
  display: flex;
  flex: 7;
  justify-content: space-around;

  &__item {
    color: white;
    font-family: Tahoma;
    font-size: 13px;
    font-weight: 700;
    line-height: 27px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;

    &--active {
      background: #f75c00;
    }

    &--with-sub {
      &:after {
        content: url("../assets/sub.png");
      }
    }
  }

  &__nested {
    position: absolute;
    left: 0;
    top: 27px;
    color: #7d7d7d;
    background: white;
    z-index: 1;
    width: 160px;
    li {
      border-bottom: 1px solid #d7d7d7;
      font-size: 14px;
      padding-left: 10px;
      text-transform: none;
      &:hover {
        background: #bfd8eb;
      }
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
  align-items: center;
  &__img {
    width: 14px;
    height: 19px;
    background: url(../assets/sign.png) no-repeat;
    margin-top: 4px;
    transition: background-image 0.3s ease-in-out;
  }
  a {
    color: #a8d5eb;
    font-size: 14px;
    margin-left: 10px;
    transition: color 0.3s ease;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover a {
    color: white;
  }
  &:hover .sign__img {
    background: url(../assets/sign-hover.png) no-repeat;
  }
}
@media screen and (max-width: 880px) {
  // .nav {
  //   flex-direction: column;
  // }
  .menu {
    position: absolute;
    left: 35px;
    top: 0;
    display: flex;
    flex-direction: column;
    background: darkblue;
  }
  .nav__btn {
    display: block;
    flex: 1;
  }
}
@media screen and (min-width: 880px) {
  .menu {
    display: flex !important;
  }
}
</style>
