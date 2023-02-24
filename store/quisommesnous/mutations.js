export default {
    initlist(state, newlist) {
        state.listquisommesnous = newlist
    },
    initheader(state, newlist) {
        state.headerquisommesnous = newlist
    },
    initdetail(state, newquisommesnous) {
        state.detailquisommesnous = newquisommesnous
    },
    removeItem(state,payload) {
        state.listquisommesnous = state.listquisommesnous.filter(item => item.id != payload)
    }
}