export default {
    initlist(state, newlist) {
        state.listslidersaccueils = newlist
    },
    initheader(state, newlist) {
        state.headerslidersaccueils = newlist
    },
    initdetail(state, newslideraccueil) {
        state.detailslideraccueil = newslideraccueil
    },
    removeItem(state,payload) {
        state.listslidersaccueils = state.listslidersaccueils.filter(item => item.id != payload)
    }
}