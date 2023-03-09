export default {
    initlist(state, newlist) {
        state.listnumerosutilesintros = newlist
    },
    initheader(state, newlist) {
        state.headernumerosutilesintros = newlist
    },
    initdetail(state, newnumeroutileintro) {
        state.detailnumeroutileintro = newnumeroutileintro
    },
    removeItem(state,payload) {
        state.listnumerosutilesintros = state.listnumerosutilesintros.filter(item => item.id != payload)
    }
}