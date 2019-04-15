<template>
  <VLayout column justify-center align-center>
    <VFlex xs12 sm8 md6 class="display-1 font-weight-medium">
      Exemplo - VueX
    </VFlex>
    <VFlex xs12 sm8 md6>
      <span class="headline font-weight-medium"
        >Soma do antigo valor com o novo:</span
      >
      <span class="headline">{{ sum }}</span>
    </VFlex>
  </VLayout>
</template>

<script>
export default {
  data() {
    return {
      sum: 0
    }
  },
  watch: {
    '$store.state.filter': function(newVal, oldVal) {
      this.sum = newVal + oldVal
    }
  }
}
</script>
