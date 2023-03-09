export default {
    initlist(state, newlist) {
        state.listavisconcurrences = newlist
    },
    initheader(state, newlist) {
        state.headeravisconcurrences = newlist
    },
    initdetail(state, newavisconcurrence) {
        state.detailavisconcurrence = newavisconcurrence
    },
    removeItem(state,payload) {
        state.listavisconcurrences = state.listavisconcurrences.filter(item => item.id != payload)
    }
}