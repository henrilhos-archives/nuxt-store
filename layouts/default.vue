<template>
  <VApp>
    <VNavigationDrawer v-model="drawer" app>
      <VList class="mx-2">
        <VBtn block color="success" @click="increment()">Incrementar</VBtn>
      </VList>
    </VNavigationDrawer>
    <VToolbar fixed app>
      <VToolbarSideIcon @click="drawer = !drawer" />
      <VToolbarTitle v-text="title" />
    </VToolbar>
    <VContent>
      <VContainer>
        <nuxt />
      </VContainer>
    </VContent>
    <VFooter fixed app>
      <span>&copy; 2019</span>
    </VFooter>
  </VApp>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      title: 'Exemplo - VueX'
    }
  },
  methods: {
    increment() {
      console.log('incrementando no store')
      this.$store.dispatch('incrementFilter')
    }
  }
}
</script>
