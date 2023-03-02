export default {
    initlist(state, newlist) {
        state.listmarchespublics = newlist
    },
    initheader(state, newlist) {
        state.headermarchespublics = newlist
    },
    initdetail(state, newmarchepublic) {
        state.detailmarchepublic = newmarchepublic
    },
    removeItem(state,payload) {
        state.listmarchespublics = state.listmarchespublics.filter(item => item.id != payload)
    }
}