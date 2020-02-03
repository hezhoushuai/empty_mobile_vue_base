<template>
  <div id="root">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(http://at.alicdn.com/t/font_1625155_uru4c7oj9nb.css); // aliyun iconfont 按需引入

html,
body {
  height: 100%;
}

#root {
  height: 100%;
  width: 100%;
}

</style>
