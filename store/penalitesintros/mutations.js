export default {
    initlist(state, newlist) {
        state.listpenalitesintros = newlist
    },
    initheader(state, newlist) {
        state.headerpenalitesintros = newlist
    },
    initdetail(state, newpenaliteintro) {
        state.detailpenaliteintro = newpenaliteintro
    },
    removeItem(state,payload) {
        state.listpenalitesintros = state.listpenalitesintros.filter(item => item.id != payload)
    }
}