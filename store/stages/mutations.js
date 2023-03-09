export default {
    initlist(state, newlist) {
        state.liststages = newlist
    },
    initheader(state, newlist) {
        state.headerstages = newlist
    },
    initdetail(state, newstage) {
        state.detailstage = newstage
    },
    removeItem(state,payload) {
        state.liststages = state.liststages.filter(item => item.id != payload)
    }
}