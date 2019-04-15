export const state = () => ({
  filter: 0
})

export const mutations = {
  INCREMENT_FILTER: function(state) {
    state.filter = state.filter + 1
  }
}

export const actions = {
  incrementFilter({ commit }) {
    commit('INCREMENT_FILTER')
  }
}
