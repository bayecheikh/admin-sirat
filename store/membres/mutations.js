export default {
    initlist(state, newlist) {
        state.listmembres = newlist
    },
    initheader(state, newlist) {
        state.headermembres = newlist
    },
    initdetail(state, newmembre) {
        state.detailmembre = newmembre
    },
    removeItem(state,payload) {
        state.listmembres = state.listmembres.filter(item => item.id != payload)
    }
}