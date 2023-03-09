export default {
    initlist(state, newlist) {
        state.listinfosutiles = newlist
    },
    initheader(state, newlist) {
        state.headerinfosutiles = newlist
    },
    initdetail(state, newinfoutile) {
        state.detailinfoutile = newinfoutile
    },
    removeItem(state,payload) {
        state.listinfosutiles = state.listinfosutiles.filter(item => item.id != payload)
    }
}