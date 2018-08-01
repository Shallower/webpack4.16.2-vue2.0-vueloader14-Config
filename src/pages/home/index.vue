<template>
  <div class="box">
    <h2 class="bb">Hello:5464564566666666666</h2>
    <img src="../../assets/icon/bill.png"
      alt="icon">
    <router-link :to="{path:'/login'}">去登陆页面</router-link>
  </div>
</template>
<script>
export default {
  name: 'home'
};
</script>
<style lang="scss">
.box {
  background: red;
  height: 200px;
  width: 300px;
}
.bbbox {
  height: 100px;
}
</style>
