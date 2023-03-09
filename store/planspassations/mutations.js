export default {
    initlist(state, newlist) {
        state.listplanspassations = newlist
    },
    initheader(state, newlist) {
        state.headerplanspassations = newlist
    },
    initdetail(state, newplanpassation) {
        state.detailplanpassation = newplanpassation
    },
    removeItem(state,payload) {
        state.listplanspassations = state.listplanspassations.filter(item => item.id != payload)
    }
}