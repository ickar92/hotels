<template>
  <div class="search">
      <button class="search__btn">Search</button>
      <div class="search__icon">
          <img src="../assets/search.png" alt="">
      </div>
  </div>
</template>

<style lang="less">
.search {
  position: relative;
  &__icon {
    position: absolute;
    top: 17px;
    left: 37px;
  }
  &__btn {
    width: 181px;
    height: 47px;
    box-shadow: inset 0 2px 0 #fcc272;
    border-radius: 3px;
    border: 1px solid #de5300;
    background-image: linear-gradient(to top, #f75e02 0%, #fbb04c 100%);
    background-repeat: no-repeat;
    color: white;
    font-family: Tahoma;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    &:hover {
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 880px) {
  .search__btn {
    margin-top: 30px;
  }
  .search__icon {
    top: 47px;
  }
}
</style>

