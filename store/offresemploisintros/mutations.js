export default {
    initlist(state, newlist) {
        state.listoffresemploisintros = newlist
    },
    initheader(state, newlist) {
        state.headeroffresemploisintros = newlist
    },
    initdetail(state, newoffreemploiintro) {
        state.detailoffreemploiintro = newoffreemploiintro
    },
    removeItem(state,payload) {
        state.listoffresemploisintros = state.listoffresemploisintros.filter(item => item.id != payload)
    }
}