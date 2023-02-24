export default {
    initlist(state, newlist) {
        state.listfoiresauxquestions = newlist
    },
    initheader(state, newlist) {
        state.headerfoiresauxquestions = newlist
    },
    initdetail(state, newfoireauxquestions) {
        state.detailfoireauxquestions = newfoireauxquestions
    },
    removeItem(state,payload) {
        state.listfoiresauxquestions = state.listfoiresauxquestions.filter(item => item.id != payload)
    }
}