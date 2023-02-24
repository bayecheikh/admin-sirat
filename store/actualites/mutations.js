export default {
    initlist(state, newlist) {
        state.listactualites = newlist
    },
    initheader(state, newlist) {
        state.headeractualites = newlist
    },
    initdetail(state, newactualite) {
        state.detailactualite = newactualite
    },
    removeItem(state,payload) {
        state.listactualites = state.listactualites.filter(item => item.id != payload)
    }
}