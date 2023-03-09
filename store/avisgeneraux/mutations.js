export default {
    initlist(state, newlist) {
        state.listavisgeneraux = newlist
    },
    initheader(state, newlist) {
        state.headeravisgeneraux = newlist
    },
    initdetail(state, newavisgeneraux) {
        state.detailavisgeneraux = newavisgeneraux
    },
    removeItem(state,payload) {
        state.listavisgeneraux = state.listavisgeneraux.filter(item => item.id != payload)
    }
}