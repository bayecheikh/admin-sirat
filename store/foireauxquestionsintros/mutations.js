export default {
    initlist(state, newlist) {
        state.listfoireauxquestionsintros = newlist
    },
    initheader(state, newlist) {
        state.headerfoireauxquestionsintros = newlist
    },
    initdetail(state, newfoireauxquestionsintro) {
        state.detailfoireauxquestionsintro = newfoireauxquestionsintro
    },
    removeItem(state,payload) {
        state.listfoireauxquestionsintros = state.listfoireauxquestionsintros.filter(item => item.id != payload)
    }
}