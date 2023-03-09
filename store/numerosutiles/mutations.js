export default {
    initlist(state, newlist) {
        state.listnumerosutiles = newlist
    },
    initheader(state, newlist) {
        state.headernumerosutiles = newlist
    },
    initdetail(state, newnumeroutile) {
        state.detailnumeroutile = newnumeroutile
    },
    removeItem(state,payload) {
        state.listnumerosutiles = state.listnumerosutiles.filter(item => item.id != payload)
    }
}