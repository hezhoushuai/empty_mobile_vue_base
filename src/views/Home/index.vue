<template>
  <div class="home">
    hello world! {{ testData }}
  </div>
</template>

<script>

export default {
  data() {
    return {
      testData: '111'
    }
  },
  created() {
    this.$http.getBanner()
      .then(resp => {
        // ...
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scope>
</style>
