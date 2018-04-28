<template>
  <div class="menu-item">
      <li class="sub" >{{sub.text}}</li>
  </div>
</template>

<script>
export default {
  props: ['sub'],
};
</script>

<style>
.sub:after {
    content: url('../assets/sub.png')
}
</style>
