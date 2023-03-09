export default {
    initlist(state, newlist) {
        state.listprojetsintros = newlist
    },
    initheader(state, newlist) {
        state.headerprojetsintros = newlist
    },
    initdetail(state, newprojetintro) {
        state.detailprojetintro = newprojetintro
    },
    removeItem(state,payload) {
        state.listprojetsintros = state.listprojetsintros.filter(item => item.id != payload)
    }
}