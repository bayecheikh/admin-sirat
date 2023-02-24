export default {
    initlist(state, newlist) {
        state.listadherents = newlist
    },
    initheader(state, newlist) {
        state.headeradherents = newlist
    },
    initdetail(state, newadherent) {
        state.detailadherent = newadherent
    },
    inittotalpage(state, newtotalpage) {
        state.totalPage = newtotalpage
    },
    initperpage(state, newtperpage) {
        state.perPage = newtperpage
    },
    initcurrentpage(state, newtperpage) {
        state.currentPage = newtperpage
    },
    initdatasearch(state, newdatasearch) {
        state.dataSearch = newdatasearch
    },
    removeItem(state,payload) {
        console.log('item to delete ++++++++ ',payload)
        state.listadherents = state.listadherents.filter(item => item.id != payload)
    }
}