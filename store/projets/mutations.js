export default {
    initlist(state, newlist) {
        state.listprojets = newlist
    },
    initheader(state, newlist) {
        state.headerprojets = newlist
    },
    initdetail(state, newprojet) {
        state.detailprojet = newprojet
    },
    removeItem(state,payload) {
        state.listprojets = state.listprojets.filter(item => item.id != payload)
    }
}