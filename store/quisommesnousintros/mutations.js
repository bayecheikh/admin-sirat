export default {
    initlist(state, newlist) {
        state.listquisommesnousintros = newlist
    },
    initheader(state, newlist) {
        state.headerquisommesnousintros = newlist
    },
    initdetail(state, newquisommesnousintro) {
        state.detailquisommesnousintro = newquisommesnousintro
    },
    removeItem(state,payload) {
        state.listquisommesnousintros = state.listquisommesnousintros.filter(item => item.id != payload)
    }
}