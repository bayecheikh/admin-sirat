export default {
    initlist(state, newlist) {
        state.listnumerosverts = newlist
    },
    initheader(state, newlist) {
        state.headernumerosverts = newlist
    },
    initdetail(state, newnumerovert) {
        state.detailnumerovert = newnumerovert
    },
    removeItem(state,payload) {
        state.listnumerosverts = state.listnumerosverts.filter(item => item.id != payload)
    }
}