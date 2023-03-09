export default {
    initlist(state, newlist) {
        state.listservicesabonnements = newlist
    },
    initheader(state, newlist) {
        state.headerservicesabonnements = newlist
    },
    initdetail(state, newserviceabonnement) {
        state.detailserviceabonnement = newserviceabonnement
    },
    removeItem(state,payload) {
        state.listservicesabonnements = state.listservicesabonnements.filter(item => item.id != payload)
    }
}