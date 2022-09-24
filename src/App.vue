<template>
<div>
	<router-view></router-view>
</div>
</template>

<script>


export default {
  name: 'App'
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap');

#app {
 /* font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #000;
  text-align: center;
  color: #fff;
  padding-top: 60px;
  height: 100vh;
}

a {
  text-decoration: none;
}
</style>
