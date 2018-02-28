<template>
    <div class="shudong">
      hi {{name}}
    </div>
</template>
<script>
  export default {
    name: 'stark',
    data () {
      return {
        name: 'stark'
      }
    }
  }
</script>
<style>
  .shudong{
    font-size:40px;
    color:red;
  }
</style>