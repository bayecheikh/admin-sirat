export default {
    initlist(state, newlist) {
        state.listtarifspeages = newlist
    },
    initheader(state, newlist) {
        state.headertarifspeages = newlist
    },
    initdetail(state, newtarifpeage) {
        state.detailtarifpeage = newtarifpeage
    },
    removeItem(state,payload) {
        state.listtarifspeages = state.listtarifspeages.filter(item => item.id != payload)
    }
}