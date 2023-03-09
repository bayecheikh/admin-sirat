export default {
    initlist(state, newlist) {
        state.listmissions = newlist
    },
    initheader(state, newlist) {
        state.headermissions = newlist
    },
    initdetail(state, newmission) {
        state.detailmission = newmission
    },
    removeItem(state,payload) {
        state.listmissions = state.listmissions.filter(item => item.id != payload)
    }
}