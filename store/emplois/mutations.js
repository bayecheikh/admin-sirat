export default {
    initlist(state, newlist) {
        state.listemplois = newlist
    },
    initheader(state, newlist) {
        state.headeremplois = newlist
    },
    initdetail(state, newemploi) {
        state.detailemploi = newemploi
    },
    removeItem(state,payload) {
        state.listemplois = state.listemplois.filter(item => item.id != payload)
    }
}