export default {
    initlist(state, newlist) {
        state.listpostepeagesintros = newlist
    },
    initheader(state, newlist) {
        state.headerpostepeagesintros = newlist
    },
    initdetail(state, newpostepeageintro) {
        state.detailpostepeageintro = newpostepeageintro
    },
    removeItem(state,payload) {
        state.listpostepeagesintros = state.listpostepeagesintros.filter(item => item.id != payload)
    }
}