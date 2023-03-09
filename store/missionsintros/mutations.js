export default {
    initlist(state, newlist) {
        state.listmissionsintros = newlist
    },
    initheader(state, newlist) {
        state.headermissionsintros = newlist
    },
    initdetail(state, newmissionintro) {
        state.detailmissionintro = newmissionintro
    },
    removeItem(state,payload) {
        state.listmissionsintros = state.listmissionsintros.filter(item => item.id != payload)
    }
}