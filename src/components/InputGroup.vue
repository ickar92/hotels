<template>
  <div class="input-group">
    <label v-bind:for="forName">{{label}}</label>
    <input v-bind:id="id" type="text" placeholder="Type city name">
    <p class="input-group__example">Ex:
      <span class="city">St. Petersburg</span>,
      <span class="city">Moscow</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['label', 'id', 'forName'],
};
</script>
